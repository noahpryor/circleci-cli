import got from 'got'

export interface Pipeline {
  id: string
  errors: any[]
  project_slug: string
  updated_at: Date
  number: number
  state: string
  created_at: Date
  trigger: Trigger
  vcs: Vcs
}

export interface Workflow {
  stopped_at: Date | null
  name: string
  project_slug: string
  pipeline_number: number
  status: string
  id: string
  created_at: Date
  pipeline_id: string
}

export interface Job {
  dependencies: string[]
  job_number: number
  id: string
  started_at: Date
  name: string
  project_slug: string
  status: 'success' | 'blocked' | 'running' | 'failed'
  type: string
  stopped_at: Date
}

interface Trigger {
  received_at: Date
  type: string
  actor: Actor
}

interface Actor {
  login?: string
  avatar_url?: string
}

interface Vcs {
  origin_repository_url: string
  target_repository_url: string
  revision: string
  provider_name: string
  commit: Commit
  branch: string
}

interface Commit {
  body: string
  subject: string
}

const client = got.extend({
  prefixUrl: 'https://circleci.com/api/v2/',
  responseType: 'json',
  headers: {
    'Circle-Token': process.env.CIRCLE_TOKEN,
  },
})

const getItems = <T>(path: string): Promise<T[]> =>
  client(path).then<any>(response => (response.body as any).items)
const getWorkflowsForPipeline = (pipelineId: string) =>
  getItems<Workflow>(`pipeline/${pipelineId}/workflow`)
const getJobsForWorkflow = (workflowId: string) =>
  getItems<Job>(`workflow/${workflowId}/job`)
const getTestMetadataForJob = (job: Job) =>
  getItems<any>(`/project/${job.project_slug}/${job.job_number}/tests`)
export { getTestMetadataForJob }

export async function getWorkflowsAndJobs(pipelineId: string) {
  const workflows = await getWorkflowsForPipeline(pipelineId)
  const jobs = await Promise.all(
    workflows.map(workflow => getJobsForWorkflow(workflow.id))
  )
  return {
    workflows,
    jobs,
  }
}

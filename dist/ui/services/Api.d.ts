import { GetQueues } from '../../@types/api';
import { AppJob, SelectedStatuses } from '../../@types/app';
export declare class Api {
    private axios;
    constructor({ basePath }?: {
        basePath: string;
    });
    getQueues({ status, }: {
        status: SelectedStatuses;
    }): Promise<GetQueues>;
    retryAll(queueName: string): Promise<void>;
    cleanAllDelayed(queueName: string): Promise<void>;
    cleanAllFailed(queueName: string): Promise<void>;
    cleanAllCompleted(queueName: string): Promise<void>;
    cleanJob(queueName: string, jobId: AppJob['id']): Promise<void>;
    retryJob(queueName: string, jobId: AppJob['id']): Promise<void>;
    promoteJob(queueName: string, jobId: AppJob['id']): Promise<void>;
    getJobLogs(queueName: string, jobId: AppJob['id']): Promise<string[]>;
    private handleResponse;
    private handleError;
}

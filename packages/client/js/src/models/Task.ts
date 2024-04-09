/* tslint:disable */
/* eslint-disable */
/**
 * Agent Protocol
 * Specification of the API protocol for communication with an agent.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Artifact } from './Artifact';
import {
    ArtifactFromJSON,
    ArtifactFromJSONTyped,
    ArtifactToJSON,
} from './Artifact';

/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * Input prompt for the task.
     * @type {string}
     * @memberof Task
     */
    input?: string;
    /**
     * Input parameters for the task. Any value is allowed.
     * @type {object}
     * @memberof Task
     */
    additionalInput?: object;
    /**
     * The ID of the task.
     * @type {string}
     * @memberof Task
     */
    taskId: string;
    /**
     * A list of artifacts that the task has produced.
     * @type {Array<Artifact>}
     * @memberof Task
     */
    artifacts: Array<Artifact>;
}

/**
 * Check if a given object implements the Task interface.
 */
export function instanceOfTask(value: object): boolean {
    if (!('taskId' in value)) return false;
    if (!('artifacts' in value)) return false;
    return true;
}

export function TaskFromJSON(json: any): Task {
    return TaskFromJSONTyped(json, false);
}

export function TaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): Task {
    if (json == null) {
        return json;
    }
    return {
        
        'input': json['input'] == null ? undefined : json['input'],
        'additionalInput': json['additional_input'] == null ? undefined : json['additional_input'],
        'taskId': json['task_id'],
        'artifacts': ((json['artifacts'] as Array<any>).map(ArtifactFromJSON)),
    };
}

export function TaskToJSON(value?: Task | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'input': value['input'],
        'additional_input': value['additionalInput'],
        'task_id': value['taskId'],
        'artifacts': ((value['artifacts'] as Array<any>).map(ArtifactToJSON)),
    };
}


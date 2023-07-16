# generated by fastapi-codegen:
#   filename:  ../openapi.yml
#   timestamp: 2023-07-16T03:30:55+00:00

from __future__ import annotations

from typing import Any, List, Optional

from pydantic import BaseModel, Field


class AgentTaskInput(BaseModel):
    __root__: Any = Field(
        ...,
        description='Input parameters for the task. This can be any JSON serializable object.',
    )


class AgentTaskArtifact(BaseModel):
    __root__: Any = Field(
        ...,
        description='Artifact that the task has produced. This can be any JSON serializable object describing the artifact.',
    )


class AgentStepInput(BaseModel):
    __root__: Any = Field(
        ...,
        description='Input parameters for the task step. This can be any JSON serializable object.',
    )


class AgentStepOutput(BaseModel):
    __root__: Any = Field(
        ...,
        description='Output that the task step has produced. This can be any JSON serializable object.',
    )


class AgentTaskRequestBody(BaseModel):
    input: Optional[AgentTaskInput] = None


class AgentTask(AgentTaskRequestBody):
    task_id: str = Field(..., description='The ID of the task.')
    artifacts: List[AgentTaskArtifact] = Field(
        ..., description='A list of artifacts that the task has produced.'
    )


class AgentStepRequestBody(BaseModel):
    input: Optional[AgentStepInput] = None


class AgentStep(AgentStepRequestBody):
    task_id: str = Field(..., description='The ID of the task this step belongs to.')
    step_id: str = Field(..., description='The ID of the task step.')
    output: Optional[AgentStepOutput] = None

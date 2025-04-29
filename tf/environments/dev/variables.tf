// These variables are required for AWS authentication, when running your code in GitHub actions they are autopopulated the workflow.
variable "aws_access_key_id" {
  type = string
}
variable "aws_secret_access_key" {
  type = string
}
variable "aws_session_token" {
  type = string
}
variable "aws_default_region" {
  type = string
}

variable "image_name" {
  description = "GitHub package name for the application"
  type        = string
}

variable "deployment_prefix" {
  description = "Prefix for the deployment, params and secrets"
  type        = string
}

variable "env" {
  description = "Flag for Deployment Environment"
  type        = string
}

variable "cpu" {
  description = "CPU for the ECS"
  type        = number
}

variable "memory" {
  description = "Memory allocation for the ECS"
  type        = number
}

variable "desired_count" {
  description = "No of tasks required"
  type        = number
}

variable "health_check_grace_period" {
  description = "Health check grace period"
  type        = number
}

variable "enable_health_check" {
  description = "Enable health check for the ECS service"
  type        = bool
}

variable "rule_priority" {
  description = "Priority of the listener rule"
  type        = number
}

variable "is_internal" {
  description = "Is internal listener"
  type        = bool
}

variable "is_ui_project" {
  description = "Boolean flag to indicate if the project is a UI project"
  type        = bool
}

variable "host_header" {
  description = "The host header to use for routing (UI projects)"
  type        = string
}

variable "custom_path" {
  description = "Custom routing path for special cases"
  type        = string
}

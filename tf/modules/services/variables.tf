variable "deployment_prefix" {
  description = "deployment_prefix"
  type        = string
}

variable "aws_region" {
  description = "AWS region"
  type        = string
}

variable "image_name" {
  description = "GitHub package name"
  type        = string
}

variable "env" {
  description = "Flag for Deployment Environment"
  type        = string
}

variable "target_group_arn" {
  description = "target_group_arn"
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
variable "path_pattern" {
  description = "Path pattern to match in the application load balancer"
  type        = string
}

variable "tag_name" {
  description = "Tag name"
  type        = string
}

variable "rule_priority" {
  description = "Priority of the listener rule"
  type        = number
}

variable "deployment_prefix" {
  description = "Prefix for the deployment, params and secrets"
  type        = string
}

variable "enable_health_check" {
  description = "Enable or disable health check"
  type        = bool
  default     = true
}

variable "is_internal" {
  description = "Is internal listener"
  type        = bool
  default     = true
}

variable "is_ui_project" {
  description = "Boolean flag to indicate if the project is a UI project"
  type        = bool
  default     = false
}

variable "host_header" {
  description = "The host header to use for routing (UI projects)"
  type        = string
  default     = ""
}

variable "custom_path" {
  description = "Custom routing path for special cases"
  type        = string
  default     = ""
}

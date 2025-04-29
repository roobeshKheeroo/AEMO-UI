module "application_listener" {
  source              = "api-listener/aws"
  version             = "1.0.7"
  path_pattern        = "/${var.deployment_prefix}/*"
  tag_name            = var.deployment_prefix
  rule_priority       = var.rule_priority
  enable_health_check = var.enable_health_check
  is_internal         = var.is_internal
  is_ui_project       = var.is_ui_project
  host_header         = var.host_header
  custom_path         = var.custom_path
}

output "target_group_arn" {
  value = module.application_listener.target_group_arn
}
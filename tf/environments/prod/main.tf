module "application_networking" {
  source              = "../../modules/networking"
  deployment_prefix   = var.deployment_prefix
  path_pattern        = "/${var.deployment_prefix}/*"
  tag_name            = var.deployment_prefix
  rule_priority       = var.rule_priority
  enable_health_check = var.enable_health_check
  is_internal         = var.is_internal
  is_ui_project       = var.is_ui_project
  host_header         = var.host_header
  custom_path         = var.custom_path
}

module "application_services" {
  source                    = "../../modules/services"
  deployment_prefix         = var.deployment_prefix
  aws_region                = var.aws_default_region
  image_name                = var.image_name
  env                       = var.env
  cpu                       = var.cpu
  memory                    = var.memory
  desired_count             = var.desired_count
  enable_health_check       = var.enable_health_check
  health_check_grace_period = var.health_check_grace_period

  target_group_arn = module.application_networking.target_group_arn
}
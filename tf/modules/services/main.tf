module "secret_manager" {
  source            = ""
  version           = "1.3.15"
  aws_region        = var.aws_region
  deployment_prefix = var.deployment_prefix
  secret_names      = local.app_secrets
}

module "ecs_api" {
  source  = ""
  version = "1.2.33"

  cluster_name   = var.deployment_prefix
  aws_region     = var.aws_region
  image_name     = var.image_name
  secret_data    = module.secret_manager.secret_data
  common_secrets = local.common_secrets
  parameter_data = []

  task_security_group_name   = "${var.deployment_prefix}_task_sg"
  ecs_service_name           = "${var.deployment_prefix}_service"
  ecs_task_definition_family = "${var.deployment_prefix}_task_definition_family"
  cloudwatch_log_group_name  = "${var.deployment_prefix}_log_group"
  ecs_execution_role_name    = "${var.deployment_prefix}_task_execution_role"
  container_name             = "${var.deployment_prefix}_container"
  env                        = var.env
  cpu                        = var.cpu
  memory                     = var.memory
  desired_count              = var.desired_count
  target_group_arn           = var.target_group_arn
  enable_health_check        = var.enable_health_check
  health_check_grace_period  = var.health_check_grace_period
}
# Please update the terraform block below with your "app" workspace tag
terraform {
  cloud {
    organization = "aemo"
    workspaces {
      tags = ["app_name:ui"]
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

}

provider "aws" {
  access_key = var.aws_access_key_id
  secret_key = var.aws_secret_access_key
  token      = var.aws_session_token
  region     = var.aws_default_region
}
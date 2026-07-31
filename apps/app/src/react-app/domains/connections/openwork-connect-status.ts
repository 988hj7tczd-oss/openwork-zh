import { t } from "@/i18n";
import type { SessionCloudMcpMaintenanceState } from "./use-session-mcp-maintenance";

export type OpenWorkConnectStatus = {
  state: "checking" | "ready" | "needs_attention";
  label: string;
  description: string;
};

export function openWorkConnectAttentionTitle(description: string): string {
  return t("connect.attention_title", { description });
}

export function resolveOpenWorkConnectStatus(
  signedIn: boolean,
  maintenance: SessionCloudMcpMaintenanceState | undefined,
): OpenWorkConnectStatus | null {
  if (!signedIn) return null;

  if (maintenance?.status === "ready") {
    return {
      state: "ready",
      label: t("connect.status_ready"),
      description: t("connect.status_ready_desc"),
    };
  }

  if (maintenance?.status === "failed" || maintenance?.status === "skipped") {
    return {
      state: "needs_attention",
      label: t("connect.status_needs_attention"),
      description: maintenance.issue?.message
        ?? t("connect.status_needs_attention_desc"),
    };
  }

  return {
    state: "checking",
    label: t("connect.status_checking"),
    description: maintenance?.status === "retrying"
      ? t("connect.status_restoring_desc", {
        attempt: maintenance.attempt,
        maxAttempts: maintenance.maxAttempts,
      })
      : t("connect.status_checking_desc"),
  };
}

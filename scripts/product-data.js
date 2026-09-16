/* Static HTML preserves legacy values without JS; verified fields alone can replace them. */
document.querySelectorAll("[data-legacy-field]").forEach((cell) => {
  const model = ProdigyFans.models[cell.dataset.model];
  if (!model) return;
  const approved = cell.dataset.approvedField
    ?.split(".")
    .reduce((value, key) => value?.[key], model);
  const legacy = model.legacyDisplay?.[cell.dataset.legacyField];
  const entry = approved?.status === "verified" ? approved : legacy;
  if (entry && entry.status !== "do_not_publish")
    cell.textContent = entry.value;
  cell.dataset.verification = entry?.status || "pending_review";
});

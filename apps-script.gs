/**
 * Bridge Dental — practice-valuation lead capture
 *
 * Appends each lead from the "What's My Practice Worth?" estimator to a
 * Google Sheet you own. Deploy steps are in README.md (5 minutes, free).
 *
 * The estimator sends ONLY: name, email, state, practice type, and a coarse
 * collections band. No actual financials ever leave the visitor's browser.
 */

// After first run, the script creates the sheet and stores its ID here automatically.
const SHEET_NAME = "Practice Valuation Leads";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet_();
    sheet.appendRow([
      new Date(),                     // captured at (server time)
      String(data.name || "").slice(0, 120),
      String(data.email || "").slice(0, 200),
      String(data.state || "").slice(0, 10),
      String(data.practiceType || "").slice(0, 20),
      String(data.sizeBand || "").slice(0, 40)
    ]);
    return ContentService.createTextOutput("ok");
  } catch (err) {
    // Never fail loudly — the estimator unlocks regardless.
    return ContentService.createTextOutput("err");
  }
}

function getOrCreateSheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty("SHEET_ID");
  let ss;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { id = null; }
  }
  if (!id) {
    ss = SpreadsheetApp.create(SHEET_NAME);
    props.setProperty("SHEET_ID", ss.getId());
    ss.getActiveSheet().appendRow(["Captured", "Name", "Email", "State", "Practice type", "Collections band"]);
  }
  return ss.getActiveSheet();
}

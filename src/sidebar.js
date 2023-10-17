const showSideBar = () => {
  const template = HtmlService.createTemplateFromFile('index');
  const html = template.evaluate().setTitle('CSV_IMPORTER');
  SpreadsheetApp.getUi().showSidebar(html);
};
export default showSideBar;

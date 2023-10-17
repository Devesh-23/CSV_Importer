const onLaunch = () => {
  SpreadsheetApp.getUi()
    .createMenu('CSV_Importer')
    .addItem('Show sidebar', 'showSideBar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

export default onLaunch;

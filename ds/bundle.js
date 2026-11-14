/* @ds-bundle: {"format":4,"namespace":"Astuto","components":[{"name":"AppShell"},{"name":"AppSideNav"},{"name":"PageHeader"},{"name":"Toolbar"},{"name":"PageTabs"},{"name":"Section"},{"name":"SelectButton"},{"name":"DateRangeButton"},{"name":"IconButton"},{"name":"SegmentedControl"},{"name":"SplitSelect"},{"name":"Divider"},{"name":"Button"},{"name":"TextButton"},{"name":"Badge"},{"name":"FilterToggle"},{"name":"IconShape"},{"name":"Stat"},{"name":"StatsRow"},{"name":"StatsWidget"},{"name":"Widget"},{"name":"BarChart"},{"name":"DonutChart"},{"name":"Legend"},{"name":"DataTable"},{"name":"Meter"},{"name":"Avatar"},{"name":"ProviderLogo"},{"name":"Table"},{"name":"Input"},{"name":"TextArea"},{"name":"Checkbox"},{"name":"Radio"},{"name":"Toggle"},{"name":"Slider"},{"name":"FileUpload"},{"name":"UploadedFile"},{"name":"OptionCard"},{"name":"Breadcrumb"},{"name":"NavTabs"},{"name":"Pagination"},{"name":"CarouselDots"},{"name":"Navbar"},{"name":"SideNav"},{"name":"Dropdown"},{"name":"FilterButton"},{"name":"Calendar"},{"name":"Modal"},{"name":"WizardModal"},{"name":"Stepper"},{"name":"Drawer"},{"name":"Popover"},{"name":"Toast"},{"name":"Tooltip"},{"name":"Callout"},{"name":"EmptyState"},{"name":"TileCard"},{"name":"IntegrationCard"},{"name":"ChangeLogCard"},{"name":"ChartTooltip"},{"name":"LegendItem"},{"name":"ProgressBar"},{"name":"CodeBlock"},{"name":"KeyValueTable"},{"name":"Icon"},{"name":"ExtraIcon"},{"name":"IconGallery"},{"name":"Logo"}]} */
(function(){
var React=window.React,h=React.createElement,F=React.Fragment,useState=React.useState;
var ICONS={"search-lg":"M21 21L17.5 17.5M20 11.5C20 16.2 16.2 20 11.5 20C6.8 20 3 16.2 3 11.5C3 6.8 6.8 3 11.5 3C16.2 3 20 6.8 20 11.5Z","search-md":"M21 21L16.65 16.65M19 11C19 15.4 15.4 19 11 19C6.6 19 3 15.4 3 11C3 6.6 6.6 3 11 3C15.4 3 19 6.6 19 11Z","x-close":"M20 4L12 12M12 12L4 20M12 12L4 4M12 12L20 20","chevron-down":"M6 9L12 15L18 9","chevron-right":"M9 18L15 12L9 6","chevron-left":"M15 18L9 12L15 6","chevron-up":"M18 15L12 9L6 15","check":"M20 6L9 17L4 12","plus":"M12 4V12M12 12V20M12 12H4M12 12H20","filter-lines":"M6 12H18M3 6H21M9 18H15","calendar":"M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.9 22 18.7 22 19.4 21.7C19.9 21.4 20.4 20.9 20.7 20.4C21 19.7 21 18.9 21 17.2V8.8C21 7.1 21 6.3 20.7 5.6C20.4 5.1 19.9 4.6 19.4 4.3C18.7 4 17.9 4 16.2 4H7.8C6.1 4 5.3 4 4.6 4.3C4.1 4.6 3.6 5.1 3.3 5.6C3 6.3 3 7.1 3 8.8V17.2C3 18.9 3 19.7 3.3 20.4C3.6 20.9 4.1 21.4 4.6 21.7C5.3 22 6.1 22 7.8 22Z","download-01":"M21 15V16.2C21 17.9 21 18.7 20.7 19.4C20.4 19.9 19.9 20.4 19.4 20.7C18.7 21 17.9 21 16.2 21H7.8C6.1 21 5.3 21 4.6 20.7C4.1 20.4 3.6 19.9 3.3 19.4C3 18.7 3 17.9 3 16.2V15M7 10L12 15L17 10M12 15V3","upload-cloud-02":"M16 16L12 12L8 16M12 12V21M20 16.7C21.2 15.7 22 14.2 22 12.5C22 9.5 19.5 7 16.5 7C16.3 7 16.1 6.9 16 6.7C14.7 4.5 12.3 3 9.5 3C5.4 3 2 6.4 2 10.5C2 12.6 2.8 14.4 4.2 15.8","bell-01":"M9.4 21C10.1 21.6 11 22 12 22C13 22 13.9 21.6 14.6 21M18 8C18 6.4 17.4 4.9 16.2 3.8C15.1 2.6 13.6 2 12 2C10.4 2 8.9 2.6 7.8 3.8C6.6 4.9 6 6.4 6 8C6 11.1 5.2 13.2 4.3 14.6C3.6 15.8 3.2 16.4 3.3 16.5C3.3 16.7 3.3 16.8 3.5 16.9C3.6 17 4.2 17 5.4 17H18.6C19.8 17 20.4 17 20.5 16.9C20.7 16.8 20.7 16.7 20.7 16.5C20.8 16.4 20.4 15.8 19.7 14.6C18.8 13.2 18 11.1 18 8Z","info-circle":"M12 16V12M12 8H12.01M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z","alert-triangle":"M12 9V13M12 17H12.01M10.6 3.9L2.4 18.1C1.9 18.9 1.7 19.3 1.7 19.6C1.8 19.9 1.9 20.1 2.1 20.3C2.4 20.5 2.9 20.5 3.8 20.5H20.2C21.1 20.5 21.6 20.5 21.9 20.3C22.1 20.1 22.2 19.9 22.3 19.6C22.3 19.3 22.1 18.9 21.6 18.1L13.4 3.9C12.9 3.1 12.7 2.7 12.4 2.6C12.1 2.5 11.9 2.5 11.6 2.6C11.3 2.7 11.1 3.1 10.6 3.9Z","check-circle":"M7.5 12L10.5 15L16.5 9M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z","alert-circle":"M12 8V12M12 16H12.01M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z","home-line":"M8 17H16M11 2.8L4.2 8C3.8 8.4 3.6 8.6 3.4 8.8C3.2 9 3.1 9.2 3.1 9.4C3 9.7 3 10 3 10.6V17.8C3 18.9 3 19.5 3.2 19.9C3.4 20.3 3.7 20.6 4.1 20.8C4.5 21 5.1 21 6.2 21H17.8C18.9 21 19.5 21 19.9 20.8C20.3 20.6 20.6 20.3 20.8 19.9C21 19.5 21 18.9 21 17.8V10.6C21 10 21 9.7 20.9 9.4C20.9 9.2 20.8 9 20.6 8.8C20.4 8.6 20.2 8.4 19.8 8L13 2.8C12.6 2.5 12.5 2.4 12.3 2.3C12.1 2.3 11.9 2.3 11.7 2.3C11.5 2.4 11.4 2.5 11 2.8Z","bar-chart-01":"M18 20V10M12 20V4M6 20V14","dots-vertical":"M13 12C13 12.6 12.6 13 12 13C11.4 13 11 12.6 11 12C11 11.4 11.4 11 12 11C12.6 11 13 11.4 13 12ZM13 5C13 5.6 12.6 6 12 6C11.4 6 11 5.6 11 5C11 4.4 11.4 4 12 4C12.6 4 13 4.4 13 5ZM13 19C13 19.6 12.6 20 12 20C11.4 20 11 19.6 11 19C11 18.4 11.4 18 12 18C12.6 18 13 18.4 13 19Z","edit-01":"M2.5 21.5L5.9 21.1C6.3 21.1 6.5 21.1 6.7 21C6.9 20.9 7 20.9 7.2 20.8C7.4 20.6 7.5 20.5 7.8 20.2L21 7C22.1 5.9 22.1 4.1 21 3C19.9 1.9 18.1 1.9 17 3L3.8 16.2C3.5 16.5 3.4 16.6 3.2 16.8C3.1 17 3.1 17.1 3 17.3C2.9 17.5 2.9 17.7 2.9 18.1L2.5 21.5Z","trash-01":"M16 6V5.2C16 4.1 16 3.5 15.8 3.1C15.6 2.7 15.3 2.4 14.9 2.2C14.5 2 13.9 2 12.8 2H11.2C10.1 2 9.5 2 9.1 2.2C8.7 2.4 8.4 2.7 8.2 3.1C8 3.5 8 4.1 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.9 19 19.7 18.7 20.4C18.4 20.9 17.9 21.4 17.4 21.7C16.7 22 15.9 22 14.2 22H9.8C8.1 22 7.3 22 6.6 21.7C6.1 21.4 5.6 20.9 5.3 20.4C5 19.7 5 18.9 5 17.2V6","arrow-up":"M12 19V5M19 12L12 5L5 12","arrow-down":"M12 5V19M5 12L12 19L19 12","eye":"M12 5C6.9 5 3.5 9.5 2.4 11.3C2.3 11.5 2.2 11.6 2.2 11.8C2.1 11.9 2.1 12.1 2.2 12.2C2.2 12.4 2.3 12.5 2.4 12.7C3.5 14.5 6.9 19 12 19C17.1 19 20.5 14.5 21.6 12.7C21.7 12.5 21.8 12.4 21.8 12.2C21.9 12.1 21.9 11.9 21.8 11.8C21.8 11.6 21.7 11.5 21.6 11.3C20.5 9.5 17.1 5 12 5ZM15 12C15 13.7 13.7 15 12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9C13.7 9 15 10.3 15 12Z","copy-01":"M5 15C4.1 15 3.6 15 3.2 14.8C2.7 14.6 2.4 14.3 2.2 13.8C2 13.4 2 12.9 2 12V5.2C2 4.1 2 3.5 2.2 3.1C2.4 2.7 2.7 2.4 3.1 2.2C3.5 2 4.1 2 5.2 2H12C12.9 2 13.4 2 13.8 2.2C14.3 2.4 14.6 2.7 14.8 3.2C15 3.6 15 4.1 15 5M12.2 22H18.8C19.9 22 20.5 22 20.9 21.8C21.3 21.6 21.6 21.3 21.8 20.9C22 20.5 22 19.9 22 18.8V12.2C22 11.1 22 10.5 21.8 10.1C21.6 9.7 21.3 9.4 20.9 9.2C20.5 9 19.9 9 18.8 9H12.2C11.1 9 10.5 9 10.1 9.2C9.7 9.4 9.4 9.7 9.2 10.1C9 10.5 9 11.1 9 12.2V18.8C9 19.9 9 20.5 9.2 20.9C9.4 21.3 9.7 21.6 10.1 21.8C10.5 22 11.1 22 12.2 22Z","refresh-cw-01":"M21 10C21 10 19 7.3 17.4 5.6C15.7 4 13.5 3 11 3C6 3 2 7 2 12C2 17 6 21 11 21C15.1 21 18.6 18.3 19.6 14.5M15 10H21V4","help-circle":"M9.1 9C9.3 8.3 9.8 7.8 10.4 7.4C11 7.1 11.7 6.9 12.4 7C13.1 7.2 13.8 7.5 14.2 8.1C14.7 8.6 14.9 9.3 14.9 10C14.9 12 11.9 13 11.9 13M12 17H12.01M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z","user-01":"M20 21C20 19.6 20 18.9 19.8 18.3C19.4 17.1 18.4 16.1 17.2 15.7C16.6 15.5 15.9 15.5 14.5 15.5H9.5C8.1 15.5 7.4 15.5 6.8 15.7C5.6 16.1 4.6 17.1 4.2 18.3C4 18.9 4 19.6 4 21M16.5 7.5C16.5 10 14.5 12 12 12C9.5 12 7.5 10 7.5 7.5C7.5 5 9.5 3 12 3C14.5 3 16.5 5 16.5 7.5Z","file-06":"M14 2.3V6.4C14 7 14 7.2 14.1 7.5C14.2 7.6 14.4 7.8 14.5 7.9C14.8 8 15 8 15.6 8H19.7M16 13H8M16 17H8M10 9H8M14 2H8.8C7.1 2 6.3 2 5.6 2.3C5.1 2.6 4.6 3.1 4.3 3.6C4 4.3 4 5.1 4 6.8V17.2C4 18.9 4 19.7 4.3 20.4C4.6 20.9 5.1 21.4 5.6 21.7C6.3 22 7.1 22 8.8 22H15.2C16.9 22 17.7 22 18.4 21.7C18.9 21.4 19.4 20.9 19.7 20.4C20 19.7 20 18.9 20 17.2V8L14 2Z","columns-03":"M9 3V21M15 3V21M7.8 3H16.2C17.9 3 18.7 3 19.4 3.3C19.9 3.6 20.4 4.1 20.7 4.6C21 5.3 21 6.1 21 7.8V16.2C21 17.9 21 18.7 20.7 19.4C20.4 19.9 19.9 20.4 19.4 20.7C18.7 21 17.9 21 16.2 21H7.8C6.1 21 5.3 21 4.6 20.7C4.1 20.4 3.6 19.9 3.3 19.4C3 18.7 3 17.9 3 16.2V7.8C3 6.1 3 5.3 3.3 4.6C3.6 4.1 4.1 3.6 4.6 3.3C5.3 3 6.1 3 7.8 3Z","share-07":"M8.6 13.5L15.4 17.5M15.4 6.5L8.6 10.5M21 5C21 6.7 19.7 8 18 8C16.3 8 15 6.7 15 5C15 3.3 16.3 2 18 2C19.7 2 21 3.3 21 5ZM9 12C9 13.7 7.7 15 6 15C4.3 15 3 13.7 3 12C3 10.3 4.3 9 6 9C7.7 9 9 10.3 9 12ZM21 19C21 20.7 19.7 22 18 22C16.3 22 15 20.7 15 19C15 17.3 16.3 16 18 16C19.7 16 21 17.3 21 19Z","pie-chart-01":"M21.2 15.9C20.6 17.4 19.6 18.7 18.3 19.8C17 20.8 15.5 21.5 13.9 21.8C12.3 22.1 10.7 22 9.1 21.6C7.6 21.1 6.1 20.3 5 19.1C3.8 18 2.9 16.5 2.5 15C2 13.4 1.9 11.8 2.2 10.2C2.5 8.6 3.2 7.1 4.2 5.8C5.2 4.5 6.5 3.5 8 2.8M21.2 8.2C21.6 9.1 21.9 10.2 22 11.2C22 11.5 22 11.6 21.9 11.7C21.9 11.8 21.8 11.9 21.7 11.9C21.6 12 21.5 12 21.2 12H12.8C12.5 12 12.4 12 12.3 11.9C12.2 11.9 12.1 11.8 12.1 11.7C12 11.6 12 11.5 12 11.2V2.8C12 2.5 12 2.4 12.1 2.3C12.1 2.2 12.2 2.1 12.3 2.1C12.4 2 12.5 2 12.8 2C13.8 2.1 14.9 2.4 15.8 2.8C17 3.3 18.1 4 19.1 4.9C20 5.9 20.7 7 21.2 8.2Z","line-chart-up-01":"M21 21H4.6C4 21 3.8 21 3.5 20.9C3.4 20.8 3.2 20.6 3.1 20.5C3 20.2 3 20 3 19.4V3M20 8L16.1 12.2C15.9 12.3 15.9 12.4 15.8 12.5C15.7 12.5 15.6 12.5 15.5 12.5C15.4 12.5 15.3 12.4 15.1 12.3L11.9 10.7C11.7 10.6 11.6 10.5 11.5 10.5C11.4 10.5 11.3 10.5 11.2 10.5C11.1 10.6 11.1 10.7 10.9 10.8L7 15","currency-dollar":"M12 4H14C16.2 4 18 5.8 18 8M12 4H10C7.8 4 6 5.8 6 8C6 10.2 7.8 12 10 12H12M12 4V2M12 4V12M12 12H14C16.2 12 18 13.8 18 16C18 18.2 16.2 20 14 20H12M12 12V20M12 20H10C7.8 20 6 18.2 6 16M12 20V22","cloud-01":"M6.5 19C4 19 2 17 2 14.5C2 12.2 3.8 10.2 6.1 10C6.5 7.2 9 5 12 5C15 5 17.5 7.2 17.9 10C20.2 10.2 22 12.2 22 14.5C22 17 20 19 17.5 19C13.1 19 10.3 19 6.5 19Z","server-01":"M6 6H6.01M6 18H6.01M5.2 10H18.8C19.9 10 20.5 10 20.9 9.8C21.3 9.6 21.6 9.3 21.8 8.9C22 8.5 22 7.9 22 6.8V5.2C22 4.1 22 3.5 21.8 3.1C21.6 2.7 21.3 2.4 20.9 2.2C20.5 2 19.9 2 18.8 2H5.2C4.1 2 3.5 2 3.1 2.2C2.7 2.4 2.4 2.7 2.2 3.1C2 3.5 2 4.1 2 5.2V6.8C2 7.9 2 8.5 2.2 8.9C2.4 9.3 2.7 9.6 3.1 9.8C3.5 10 4.1 10 5.2 10ZM5.2 22H18.8C19.9 22 20.5 22 20.9 21.8C21.3 21.6 21.6 21.3 21.8 20.9C22 20.5 22 19.9 22 18.8V17.2C22 16.1 22 15.5 21.8 15.1C21.6 14.7 21.3 14.4 20.9 14.2C20.5 14 19.9 14 18.8 14H5.2C4.1 14 3.5 14 3.1 14.2C2.7 14.4 2.4 14.7 2.2 15.1C2 15.5 2 16.1 2 17.2V18.8C2 19.9 2 20.5 2.2 20.9C2.4 21.3 2.7 21.6 3.1 21.8C3.5 22 4.1 22 5.2 22Z","database-01":"M21 5C21 6.7 17 8 12 8C7 8 3 6.7 3 5M21 5C21 3.3 17 2 12 2C7 2 3 3.3 3 5M21 5V19C21 20.7 17 22 12 22C7 22 3 20.7 3 19V5M21 12C21 13.7 17 15 12 15C7 15 3 13.7 3 12","lightning-01":"M13 2L4.1 12.7C3.7 13.1 3.6 13.3 3.6 13.5C3.6 13.6 3.6 13.8 3.8 13.9C3.9 14 4.2 14 4.7 14H12L11 22L19.9 11.3C20.3 10.9 20.4 10.7 20.4 10.5C20.4 10.4 20.4 10.2 20.2 10.1C20.1 10 19.8 10 19.3 10H12L13 2Z","menu-01":"M3 12H21M3 6H21M3 18H21","log-out-01":"M16 7L21 12L16 17M21 12H9M9 3H7.8C6.1 3 5.3 3 4.6 3.3C4.1 3.6 3.6 4.1 3.3 4.6C3 5.3 3 6.1 3 7.8V16.2C3 17.9 3 18.7 3.3 19.4C3.6 19.9 4.1 20.4 4.6 20.7C5.3 21 6.1 21 7.8 21H9","sun":"M12 2V4M12 20V22M4 12H2M6.3 6.3L4.9 4.9M17.7 6.3L19.1 4.9M6.3 17.7L4.9 19.1M17.7 17.7L19.1 19.1M22 12H20M17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7C14.8 7 17 9.2 17 12Z","moon-01":"M17.7 16.8C19.2 16.8 20.7 16.4 22 15.8C20.4 19.5 16.7 22 12.5 22C6.7 22 2 17.3 2 11.5C2 7.3 4.5 3.6 8.2 2C7.6 3.3 7.2 4.8 7.2 6.3C7.2 12.1 11.9 16.8 17.7 16.8Z","arrow-narrow-up-right":"M6 18L18 6M18 14V6H10","trend-up-01":"M22 7L14.1 14.9C13.7 15.3 13.5 15.5 13.3 15.5C13.1 15.6 12.9 15.6 12.7 15.5C12.5 15.5 12.3 15.3 11.9 14.9L9.1 12.1C8.7 11.7 8.5 11.5 8.3 11.5C8.1 11.4 7.9 11.4 7.7 11.5C7.5 11.5 7.3 11.7 6.9 12.1L2 17M22 7H15M22 7V14","trend-down-01":"M22 17L14.1 9.1C13.7 8.7 13.5 8.5 13.3 8.5C13.1 8.4 12.9 8.4 12.7 8.5C12.5 8.5 12.3 8.7 11.9 9.1L9.1 11.9C8.7 12.3 8.5 12.5 8.3 12.5C8.1 12.6 7.9 12.6 7.7 12.5C7.5 12.5 7.3 12.3 6.9 11.9L2 7M22 17H15M22 17V10","chevron-left-double":"M18 17L13 12L18 7M11 17L6 12L11 7","chevron-right-double":"M6 17L11 12L6 7M13 17L18 12L13 7","minus":"M4 12H20","chevron-selector-vertical":"M7 15L12 20L17 15M7 9L12 4L17 9","globe-02":"M12 2C14.5 4.7 15.9 8.3 16 12C15.9 15.7 14.5 19.3 12 22M12 2C9.5 4.7 8.1 8.3 8 12C8.1 15.7 9.5 19.3 12 22M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22M2.5 9H21.5M2.5 15H21.5","eye-off":"M10.7 5.1C11.1 5 11.6 5 12 5C17.1 5 20.5 9.5 21.6 11.3C21.7 11.5 21.8 11.6 21.8 11.8C21.9 11.9 21.9 12.1 21.8 12.2C21.8 12.4 21.7 12.5 21.6 12.7C21.3 13.2 20.8 13.9 20.2 14.6M6.7 6.7C4.6 8.2 3.1 10.2 2.4 11.3C2.3 11.5 2.2 11.6 2.2 11.8C2.1 11.9 2.1 12.1 2.2 12.2C2.2 12.4 2.3 12.5 2.4 12.7C3.5 14.5 6.9 19 12 19C14.1 19 15.8 18.3 17.3 17.3M6.7 6.7L3 3M14.1 14.1L9.9 9.9L6.7 6.7M17.3 17.3L14.1 14.1M17.3 17.3L21 21M9.9 9.9C9.3 10.4 9 11.2 9 12C9 13.7 10.3 15 12 15C12.8 15 13.6 14.7 14.1 14.1","clock":"M12 6V12L16 14M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z","lightbulb-02":"M10 17.7V20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20V17.7M12 2V3M3 12H2M5.5 5.5L4.9 4.9M18.5 5.5L19.1 4.9M22 12H21M18 12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12C6 8.7 8.7 6 12 6C15.3 6 18 8.7 18 12Z","plus-circle":"M12 8V16M8 12H16M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z","arrow-left":"M19 12H5M12 5L5 12L12 19","link-external-01":"M15 3H21L21 9M21 3L13 11M10 5H7.8C6.1 5 5.3 5 4.6 5.3C4.1 5.6 3.6 6.1 3.3 6.6C3 7.3 3 8.1 3 9.8V16.2C3 17.9 3 18.7 3.3 19.4C3.6 19.9 4.1 20.4 4.6 20.7C5.3 21 6.1 21 7.8 21H14.2C15.9 21 16.7 21 17.4 20.7C17.9 20.4 18.4 19.9 18.7 19.4C19 18.7 19 17.9 19 16.2V14","upload-01":"M21 15V16.2C21 17.9 21 18.7 20.7 19.4C20.4 19.9 19.9 20.4 19.4 20.7C18.7 21 17.9 21 16.2 21H7.8C6.1 21 5.3 21 4.6 20.7C4.1 20.4 3.6 19.9 3.3 19.4C3 18.7 3 17.9 3 16.2V15M7 8L12 3L17 8M12 3V15","x-circle":"M15 9L9 15M9 9L15 15M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z","loading-02":"M12 2V6M12 18V22M6 12H2M22 12H18M19.1 19.1L16.3 16.3M19.1 5L16.3 7.8M4.9 19.1L7.8 16.3M4.9 5L7.8 7.8","zoom-in":"M21 21L16.6 16.6M11 8V14M8 11H14M19 11C19 15.4 15.4 19 11 19C6.6 19 3 15.4 3 11C3 6.6 6.6 3 11 3C15.4 3 19 6.6 19 11Z","zoom-out":"M21 21L16.6 16.6M8 11H14M19 11C19 15.4 15.4 19 11 19C6.6 19 3 15.4 3 11C3 6.6 6.6 3 11 3C15.4 3 19 6.6 19 11Z","expand-01":"M14 10L21 3M21 9V3H15M10 14L3 21M3 15L3 21H9","layout-alt-01":"M3 9H21M9 9L9 21M7.8 3H16.2C17.9 3 18.7 3 19.4 3.3C19.9 3.6 20.4 4.1 20.7 4.6C21 5.3 21 6.1 21 7.8V16.2C21 17.9 21 18.7 20.7 19.4C20.4 19.9 19.9 20.4 19.4 20.7C18.7 21 17.9 21 16.2 21H7.8C6.1 21 5.3 21 4.6 20.7C4.1 20.4 3.6 19.9 3.3 19.4C3 18.7 3 17.9 3 16.2V7.8C3 6.1 3 5.3 3.3 4.6C3.6 4.1 4.1 3.6 4.6 3.3C5.3 3 6.1 3 7.8 3Z","line-chart-up-03":"M17 9L11.6 14.4C11.4 14.6 11.3 14.7 11.2 14.8C11.1 14.8 10.9 14.8 10.8 14.8C10.7 14.7 10.6 14.6 10.4 14.4L8.6 12.6C8.4 12.4 8.3 12.3 8.2 12.2C8.1 12.2 7.9 12.2 7.8 12.2C7.7 12.3 7.6 12.4 7.4 12.6L3 17M17 13V9H13M7.8 21H16.2C17.9 21 18.7 21 19.4 20.7C19.9 20.4 20.4 19.9 20.7 19.4C21 18.7 21 17.9 21 16.2V7.8C21 6.1 21 5.3 20.7 4.6C20.4 4.1 19.9 3.6 19.4 3.3C18.7 3 17.9 3 16.2 3H7.8C6.1 3 5.3 3 4.6 3.3C4.1 3.6 3.6 4.1 3.3 4.6C3 5.3 3 6.1 3 7.8V16.2C3 17.9 3 18.7 3.3 19.4C3.6 19.9 4.1 20.4 4.6 20.7C5.3 21 6.1 21 7.8 21Z","coins-swap-01":"M6 2L8 4L6 6M8 4H6C3.8 4 2 5.8 2 8M18 22L16 20L18 18M16 20H18C20.2 20 22 18.2 22 16M13.4 13.4C14.2 13.8 15.1 14 16 14C19.3 14 22 11.3 22 8C22 4.7 19.3 2 16 2C12.7 2 10 4.7 10 8C10 8.9 10.2 9.8 10.6 10.6M14 16C14 19.3 11.3 22 8 22C4.7 22 2 19.3 2 16C2 12.7 4.7 10 8 10C11.3 10 14 12.7 14 16Z","target-04":"M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 12M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7","ticket-01":"M10 8V7M10 12.5V11.5M10 17V16M5.2 4H18.8C19.9 4 20.5 4 20.9 4.2C21.3 4.4 21.6 4.7 21.8 5.1C22 5.5 22 6.1 22 7.2V8.5C20.1 8.5 18.5 10.1 18.5 12C18.5 13.9 20.1 15.5 22 15.5V16.8C22 17.9 22 18.5 21.8 18.9C21.6 19.3 21.3 19.6 20.9 19.8C20.5 20 19.9 20 18.8 20H5.2C4.1 20 3.5 20 3.1 19.8C2.7 19.6 2.4 19.3 2.2 18.9C2 18.5 2 17.9 2 16.8V15.5C3.9 15.5 5.5 13.9 5.5 12C5.5 10.1 3.9 8.5 2 8.5V7.2C2 6.1 2 5.5 2.2 5.1C2.4 4.7 2.7 4.4 3.1 4.2C3.5 4 4.1 4 5.2 4Z","users-01":"M22 21V19C22 17.1 20.7 15.6 19 15.1M15.5 3.3C17 3.9 18 5.3 18 7C18 8.7 17 10.1 15.5 10.7M17 21C17 19.1 17 18.2 16.7 17.5C16.3 16.5 15.5 15.7 14.5 15.3C13.8 15 12.9 15 11 15H8C6.1 15 5.2 15 4.5 15.3C3.5 15.7 2.7 16.5 2.3 17.5C2 18.2 2 19.1 2 21M13.5 7C13.5 9.2 11.7 11 9.5 11C7.3 11 5.5 9.2 5.5 7C5.5 4.8 7.3 3 9.5 3C11.7 3 13.5 4.8 13.5 7Z","edit-05":"M11 4H6.8C5.1 4 4.3 4 3.6 4.3C3.1 4.6 2.6 5.1 2.3 5.6C2 6.3 2 7.1 2 8.8V17.2C2 18.9 2 19.7 2.3 20.4C2.6 20.9 3.1 21.4 3.6 21.7C4.3 22 5.1 22 6.8 22H15.2C16.9 22 17.7 22 18.4 21.7C18.9 21.4 19.4 20.9 19.7 20.4C20 19.7 20 18.9 20 17.2V13M8 16H9.7C10.2 16 10.4 16 10.6 15.9C10.8 15.9 11 15.8 11.2 15.7C11.4 15.6 11.6 15.4 11.9 15.1L21.5 5.5C22.3 4.7 22.3 3.3 21.5 2.5C20.7 1.7 19.3 1.7 18.5 2.5L8.9 12.1C8.6 12.4 8.4 12.6 8.3 12.8C8.2 13 8.1 13.2 8.1 13.4C8 13.6 8 13.8 8 14.3V16Z","link-broken-01":"M9 4V2M15 20V22M4 9H2M20 15H22M4.9 4.9L3.5 3.5M19.1 19.1L20.5 20.5M12 17.7L9.9 19.8C8.3 21.3 5.8 21.3 4.2 19.8C2.7 18.2 2.7 15.7 4.2 14.1L6.3 12M17.7 12L19.8 9.9C21.3 8.3 21.3 5.8 19.8 4.2C18.2 2.7 15.7 2.7 14.1 4.2L12 6.3","table":"M3 9L21 9M9 3L9 21M7.8 3H16.2C17.9 3 18.7 3 19.4 3.3C19.9 3.6 20.4 4.1 20.7 4.6C21 5.3 21 6.1 21 7.8V16.2C21 17.9 21 18.7 20.7 19.4C20.4 19.9 19.9 20.4 19.4 20.7C18.7 21 17.9 21 16.2 21H7.8C6.1 21 5.3 21 4.6 20.7C4.1 20.4 3.6 19.9 3.3 19.4C3 18.7 3 17.9 3 16.2V7.8C3 6.1 3 5.3 3.3 4.6C3.6 4.1 4.1 3.6 4.6 3.3C5.3 3 6.1 3 7.8 3Z","layout-left":"M9 3V21M7.8 3H16.2C17.9 3 18.7 3 19.4 3.3C19.9 3.6 20.4 4.1 20.7 4.6C21 5.3 21 6.1 21 7.8V16.2C21 17.9 21 18.7 20.7 19.4C20.4 19.9 19.9 20.4 19.4 20.7C18.7 21 17.9 21 16.2 21H7.8C6.1 21 5.3 21 4.6 20.7C4.1 20.4 3.6 19.9 3.3 19.4C3 18.7 3 17.9 3 16.2V7.8C3 6.1 3 5.3 3.3 4.6C3.6 4.1 4.1 3.6 4.6 3.3C5.3 3 6.1 3 7.8 3Z","coins-stacked-01":"M12 17C12 19.8 14.2 22 17 22C19.8 22 22 19.8 22 17C22 14.2 19.8 12 17 12C14.2 12 12 14.2 12 17ZM12 17C12 15.9 12.4 14.8 13 14V5M12 17C12 17.8 12.2 18.6 12.6 19.3C11.7 20 9.8 20.5 7.5 20.5C4.5 20.5 2 19.6 2 18.5V5M13 5C13 6.1 10.5 7 7.5 7C4.5 7 2 6.1 2 5M13 5C13 3.9 10.5 3 7.5 3C4.5 3 2 3.9 2 5M2 14C2 15.1 4.5 16 7.5 16C9.7 16 11.6 15.5 12.5 14.9M13 9.5C13 10.6 10.5 11.5 7.5 11.5C4.5 11.5 2 10.6 2 9.5","tag-01":"M8 8H8.01M2 5.2L2 9.7C2 10.2 2 10.4 2.1 10.6C2.1 10.8 2.2 11 2.3 11.2C2.4 11.4 2.6 11.6 2.9 11.9L10.6 19.6C11.8 20.8 12.4 21.4 13.1 21.6C13.7 21.8 14.3 21.8 14.9 21.6C15.6 21.4 16.2 20.8 17.4 19.6L19.6 17.4C20.8 16.2 21.4 15.6 21.6 14.9C21.8 14.3 21.8 13.7 21.6 13.1C21.4 12.4 20.8 11.8 19.6 10.6L11.9 2.9C11.6 2.6 11.4 2.4 11.2 2.3C11 2.2 10.8 2.1 10.6 2.1C10.4 2 10.2 2 9.7 2L5.2 2C4.1 2 3.5 2 3.1 2.2C2.7 2.4 2.4 2.7 2.2 3.1C2 3.5 2 4.1 2 5.2ZM8.5 8C8.5 8.3 8.3 8.5 8 8.5C7.7 8.5 7.5 8.3 7.5 8C7.5 7.7 7.7 7.5 8 7.5C8.3 7.5 8.5 7.7 8.5 8Z","shield-tick":"M9 11.5L11 13.5L15.5 9M20 12C20 16.9 14.6 20.5 12.7 21.6C12.5 21.7 12.4 21.8 12.2 21.8C12.1 21.9 11.9 21.9 11.8 21.8C11.6 21.8 11.5 21.7 11.3 21.6C9.4 20.5 4 16.9 4 12V7.2C4 6.4 4 6 4.1 5.7C4.2 5.4 4.4 5.1 4.7 4.9C5 4.6 5.3 4.5 6.1 4.2L11.4 2.2C11.6 2.1 11.8 2.1 11.9 2.1C12 2.1 12 2.1 12.1 2.1C12.3 2.1 12.4 2.1 12.6 2.2L17.9 4.2C18.7 4.5 19 4.6 19.3 4.9C19.6 5.1 19.8 5.4 19.9 5.7C20 6 20 6.4 20 7.2V12Z","file-search-02":"M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.1 20 4.3 19.7 3.6C19.4 3.1 18.9 2.6 18.4 2.3C17.7 2 16.9 2 15.2 2H8.8C7.1 2 6.3 2 5.6 2.3C5.1 2.6 4.6 3.1 4.3 3.6C4 4.3 4 5.1 4 6.8V17.2C4 18.9 4 19.7 4.3 20.4C4.6 20.9 5.1 21.4 5.6 21.7C6.3 22 7.1 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.9 19.9 21.5 18 21.5C16.1 21.5 14.5 19.9 14.5 18C14.5 16.1 16.1 14.5 18 14.5C19.9 14.5 21.5 16.1 21.5 18Z","bar-line-chart":"M20 20V13M12 20V10M4 20L4 16M13.4 5L18.6 7M10.8 5.4L5.2 9.6M21.1 6.4C21.6 7 21.6 8 21.1 8.6C20.5 9.1 19.5 9.1 18.9 8.6C18.4 8 18.4 7 18.9 6.4C19.5 5.9 20.5 5.9 21.1 6.4ZM5.1 9.4C5.6 10 5.6 11 5.1 11.6C4.5 12.1 3.5 12.1 2.9 11.6C2.4 11 2.4 10 2.9 9.4C3.5 8.9 4.5 8.9 5.1 9.4ZM13.1 3.4C13.6 4 13.6 5 13.1 5.6C12.5 6.1 11.5 6.1 10.9 5.6C10.4 5 10.4 4 10.9 3.4C11.5 2.9 12.5 2.9 13.1 3.4Z","settings-01":"M9.4 19.4L10 20.7C10.2 21.1 10.4 21.4 10.8 21.6C11.2 21.9 11.6 22 12 22C12.4 22 12.8 21.9 13.2 21.6C13.6 21.4 13.9 21.1 14 20.7L14.6 19.4C14.8 18.9 15.2 18.5 15.6 18.3C16.1 18 16.6 17.9 17.1 17.9L18.5 18.1C18.9 18.1 19.4 18.1 19.7 17.9C20.1 17.7 20.4 17.4 20.7 17C20.9 16.6 21 16.2 21 15.8C20.9 15.4 20.8 14.9 20.5 14.6L19.7 13.4C19.4 13 19.2 12.5 19.2 12C19.2 11.5 19.4 11 19.7 10.6L20.5 9.4C20.8 9.1 20.9 8.7 21 8.2C21 7.8 20.9 7.4 20.7 7C20.4 6.6 20.1 6.3 19.7 6.1C19.4 5.9 18.9 5.9 18.5 5.9L17.1 6.1C16.6 6.1 16.1 6 15.6 5.7C15.2 5.5 14.8 5.1 14.6 4.6L14 3.3C13.9 2.9 13.6 2.6 13.2 2.4C12.8 2.1 12.4 2 12 2C11.6 2 11.2 2.1 10.8 2.4C10.4 2.6 10.2 2.9 10 3.3L9.4 4.6C9.2 5.1 8.8 5.5 8.4 5.7C8 6 7.4 6.1 6.9 6.1L5.5 5.9C5.1 5.9 4.6 5.9 4.3 6.1C3.9 6.3 3.6 6.6 3.3 7C3.1 7.4 3 7.8 3 8.2C3.1 8.7 3.2 9.1 3.5 9.4L4.3 10.6C4.6 11 4.8 11.5 4.8 12C4.8 12.5 4.6 13 4.3 13.4L3.5 14.6C3.2 14.9 3.1 15.3 3 15.8C3 16.2 3.1 16.6 3.3 17C3.6 17.4 3.9 17.7 4.3 17.9C4.6 18.1 5.1 18.1 5.5 18.1L6.9 17.9C7.4 17.9 7.9 18 8.4 18.3C8.8 18.5 9.2 18.9 9.4 19.4ZM15 12C15 13.7 13.7 15 12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9C13.7 9 15 10.3 15 12Z"};
function cx(){return Array.prototype.filter.call(arguments,Boolean).join(' ');}

function iconLib(v){return v==='solid'?window.AstutoIconsSolid:window.AstutoIconsLine;}
function escT(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function Icon(p){var s=p.size||16;var lib=iconLib(p.variant);var inner=lib&&lib.icons[p.name];var d=ICONS[p.name];
  var base={className:cx('as-icon',p.className),width:s,height:s,viewBox:'0 0 24 24',fill:'none','aria-hidden':p.title?null:true,role:p.title?'img':null,style:p.style};
  if(inner&&!(p.strokeWidth&&d&&p.variant!=='solid'))return h('svg',Object.assign(base,{dangerouslySetInnerHTML:{__html:(p.title?'<title>'+escT(p.title)+'</title>':'')+inner}}));
  return h('svg',base,p.title?h('title',null,p.title):null,h('path',{d:d||'',stroke:'currentColor',strokeWidth:p.strokeWidth||2,strokeLinecap:'round',strokeLinejoin:'round'}));}
Icon.names=function(variant){var lib=iconLib(variant);return lib?Object.keys(lib.icons):Object.keys(ICONS);};
Icon.categories=function(variant){var lib=iconLib(variant);return lib?lib.categories:{};};
function ExtraIcon(p){var lib=window.AstutoIconsExtra;var x=lib&&lib.icons[p.name];if(!x)return null;var hh=p.size||24;var w=Math.round(hh*x.w/x.h);
  return h('img',{className:cx('as-xicon',p.className),src:'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(x.svg),width:w,height:hh,alt:p.alt===undefined?p.name:p.alt,style:p.style});}
ExtraIcon.names=function(){return window.AstutoIconsExtra?Object.keys(window.AstutoIconsExtra.icons):[];};
ExtraIcon.categories=function(){return window.AstutoIconsExtra?window.AstutoIconsExtra.categories:{};};
function IconGallery(p){var kinds=['line','solid','extra'];var st=useState(kinds.indexOf(p.variant||'line'));var q=useState('');var cat=useState('All');var copied=useState('');var k=kinds[st[0]];
  var cats=k==='extra'?ExtraIcon.categories():Icon.categories(k);var all=cat[0]==='All'?(k==='extra'?ExtraIcon.names():Icon.names(k)):(cats[cat[0]]||[]);
  var term=q[0].trim().toLowerCase();var list=term?all.filter(function(n){return n.indexOf(term)>=0;}):all;var max=p.limit||240;
  function pick(n){var code=k==='extra'?'<ExtraIcon name="'+n+'" />':(k==='solid'?'<Icon name="'+n+'" variant="solid" />':'<Icon name="'+n+'" />');try{navigator.clipboard&&navigator.clipboard.writeText(code);}catch(e){}copied[1](n);p.onPick&&p.onPick(n,k);}
  return h('div',{className:'as-gallery'},
    h('div',{className:'as-gallery-bar'},h(SegmentedControl,{size:'sm',value:st[0],onChange:function(i){st[1](i);cat[1]('All');},options:[{label:'Line'},{label:'Solid'},{label:'Extra'}]}),
      h('div',{className:'as-input as-input--sm as-gallery-search'},h(Icon,{name:'search-md',size:16}),h('input',{placeholder:'Search '+all.length+' icons…',value:q[0],onChange:function(e){q[1](e.target.value);},'aria-label':'Search icons'})),
      h('select',{className:'as-gallery-cat',value:cat[0],onChange:function(e){cat[1](e.target.value);},'aria-label':'Category'},h('option',{value:'All'},'All categories'),Object.keys(cats).map(function(c){return h('option',{key:c,value:c},c+' ('+cats[c].length+')');}))),
    h('div',{className:'as-gallery-grid'},list.slice(0,max).map(function(n){return h('button',{key:n,type:'button',className:cx('as-gallery-cell',copied[0]===n&&'is-copied'),title:n,onClick:function(){pick(n);}},
      k==='extra'?h(ExtraIcon,{name:n,size:24,alt:''}):h(Icon,{name:n,variant:k,size:24}),h('span',null,copied[0]===n?'Copied':n));})),
    h('div',{className:'as-gallery-foot'},'Showing '+Math.min(max,list.length)+' of '+list.length+(list.length>max?' — search to narrow':'')+'. Click an icon to copy its code.'));}

function Logo(p){var s=p.size||32;return h('span',{className:'as-logo'},
  h('svg',{width:s,height:s,viewBox:'0 0 32 32',fill:'none','aria-hidden':true},
    h('path',{fillRule:'evenodd',clipRule:'evenodd',fill:'var(--logo-ink, #056C4E)',d:'M13.4 20.9C12.4 22.5 12.5 24.4 13.3 25.9C13.4 26.1 13.3 26.4 13.1 26.4H6.3C2.8 26.4 0 23.6 0 20.1C0 16.6 2.8 13.8 6.3 13.8C6.5 13.8 6.6 13.8 6.8 13.8C6.9 13.8 7 13.9 7.1 14.1C7.2 15.4 7.5 16.2 7.7 16.7C7.7 16.8 7.8 16.8 7.8 16.6C7.6 16 7.4 15.1 7.4 13.9C7.5 9 11.5 5 16.5 5C19 5 21.3 6 23 7.7C23.1 7.9 23 8.2 22.8 8.2C21.4 8.5 20 9.3 19.2 10.7L13.4 20.9Z'}),
    h('ellipse',{cx:28.4,cy:22.7,rx:3.6,ry:3.6,fill:'var(--logo-ink, #056C4E)'}),
    h('rect',{x:18.9,y:27.4,width:5.9,height:17.6,rx:2.9,transform:'rotate(-150 18.9 27.4)',fill:'var(--logo-ink, #056C4E)'})),
  p.wordmark===false?null:h('span',{className:'as-logo-word'},p.name||'OneLens'));}

/* Buttons */
function Button(p){var color=p.color||'gray',size=p.size||'base',iconOnly=!p.children&&(p.icon||p.leftIcon);
  var cls=cx('as-btn','as-btn--'+color,'as-btn--'+size,p.outline&&'as-btn--outline',iconOnly&&'as-btn--icon',p.className);
  var is=size==='xl'||size==='lg'?20:16;
  return h('button',{type:p.type||'button',className:cls,disabled:color==='disabled'||p.disabled,onClick:p.onClick,'aria-label':iconOnly?p['aria-label']||p.icon:null},
    p.leftIcon?h(Icon,{name:p.leftIcon,size:is}):null,
    iconOnly&&p.icon?h(Icon,{name:p.icon,size:is}):null,
    p.children?h('span',null,p.children):null,
    p.rightIcon?h(Icon,{name:p.rightIcon,size:is}):null);}
function TextButton(p){var color=p.color||'default',size=p.size||'medium';
  return h('button',{type:'button',className:cx('as-tbtn','as-tbtn--'+color,'as-tbtn--'+size,p.className),disabled:color==='disabled'||p.disabled,onClick:p.onClick},
    p.leftIcon?h(Icon,{name:p.leftIcon,size:size==='small'?14:16}):null,
    p.children?h('span',null,p.children):null,
    p.rightIcon?h(Icon,{name:p.rightIcon,size:size==='small'?14:16}):null);}

/* Status */
function Badge(p){var t=p.theme||'gray';return h('span',{className:cx('as-badge','as-badge--'+t,p.size==='sm'&&'as-badge--sm',p.outline&&'as-badge--outline',!p.children&&'as-badge--icon')},
  p.icon?h(Icon,{name:p.icon,size:12}):null,p.children,p.rightIcon?h(Icon,{name:p.rightIcon,size:12}):null);}
function FilterToggle(p){var t=p.theme||'gray';var st=useState(!!p.selected);var sel=p.onChange?!!p.selected:st[0];
  return h('button',{type:'button',className:cx('as-ftog','as-ftog--'+t,sel&&'is-selected'),'aria-pressed':sel,onClick:function(){p.onChange?p.onChange(!sel):st[1](!sel);}},
    sel?h(Icon,{name:'check',size:12}):null,p.children);}
function IconShape(p){var c=p.color||'gray',s=p.size||'base';return h('span',{className:cx('as-ishape','as-ishape--'+c,'as-ishape--'+s)},h(Icon,{name:p.icon||'info-circle',size:{xs:12,sm:14,base:16,md:20,lg:24}[s]}));}
function ProgressBar(p){var v=Math.max(0,Math.min(100,p.value||0));return h('div',{className:'as-progress'},
  h('div',{className:'as-progress-track',role:'progressbar','aria-valuenow':v,'aria-valuemin':0,'aria-valuemax':100},h('div',{className:'as-progress-fill',style:{width:v+'%'}})),
  p.label?h('span',{className:'as-progress-label'},v+'%'):null);}
function Toast(p){var type=p.type||'info';var ic={info:'info-circle',success:'check-circle',warning:'alert-triangle',error:'alert-circle'}[type];
  var col={info:'gray',success:'success',warning:'warning',error:'error'}[type];
  return h('div',{className:'as-toast',role:type==='error'?'alert':'status'},
    h(IconShape,{icon:ic,color:col,size:'md'}),
    h('div',{className:'as-toast-body'},
      p.title?h('div',{className:'as-toast-title'},p.title):null,
      p.children?h('div',{className:'as-toast-text'},p.children):null,
      p.subtext?h('div',{className:'as-toast-sub'},p.subtext):null,
      p.actions?h('div',{className:'as-toast-actions'},p.actions):null),
    p.onClose!==undefined?h('button',{className:'as-toast-close','aria-label':'Close',onClick:p.onClose},h(Icon,{name:'x-close',size:12})):null);}
function Tooltip(p){var st=useState(false);var side=p.side||'top';
  return h('span',{className:'as-tip',onMouseEnter:function(){st[1](true);},onMouseLeave:function(){st[1](false);},onFocus:function(){st[1](true);},onBlur:function(){st[1](false);}},
    p.children||h('button',{className:'as-tip-trigger','aria-label':'More info'},h(Icon,{name:'help-circle',size:14})),
    (st[0]||p.open)?h('span',{className:'as-tip-bubble as-tip--'+side,role:'tooltip'},p.title?h('strong',null,p.title):null,p.content):null);}

/* Forms */
function Field(p,control){return h('div',{className:cx('as-field',p.size==='sm'&&'as-field--sm')},
  p.label?h('label',{className:'as-field-label',htmlFor:p.id},p.label,p.tooltip?h(Tooltip,{content:p.tooltip}):null):null,
  control,
  p.subtext||p.error||p.success?h('div',{className:cx('as-field-sub',p.error&&'is-error',p.success&&'is-success')},p.error||p.success||p.subtext):null);}
function Input(p){var st=p.error?'error':p.success?'success':'';
  return Field(p,h('div',{className:cx('as-input',st&&'is-'+st,p.disabled&&'is-disabled')},
    p.leftIcon?h(Icon,{name:p.leftIcon,size:16}):null,
    h('input',{id:p.id,type:p.type||'text',placeholder:p.placeholder,defaultValue:p.defaultValue,value:p.value,onChange:p.onChange,disabled:p.disabled,'aria-invalid':!!p.error}),
    p.rightIcon?h(Icon,{name:p.rightIcon,size:16}):null));}
function TextArea(p){var st=p.error?'error':p.success?'success':'';
  return Field(p,h('div',{className:cx('as-input','as-input--area',st&&'is-'+st,p.disabled&&'is-disabled')},
    h('textarea',{id:p.id,rows:p.rows||4,placeholder:p.placeholder,defaultValue:p.defaultValue,disabled:p.disabled})));}
function choice(kind){return function(p){var st=useState(!!p.defaultChecked);var on=p.checked!==undefined?p.checked:st[0];
  return h('label',{className:cx('as-choice','as-choice--'+kind,p.disabled&&'is-disabled')},
    h('input',{type:kind==='radio'?'radio':'checkbox',name:p.name,checked:on,disabled:p.disabled,onChange:function(e){st[1](e.target.checked);p.onChange&&p.onChange(e.target.checked);}}),
    h('span',{className:'as-choice-box','aria-hidden':true},kind==='checkbox'&&on?h(Icon,{name:p.indeterminate?'minus':'check',size:12,strokeWidth:3}):null),
    p.label?h('span',{className:'as-choice-label'},p.label):null);};}
var Checkbox=choice('checkbox'),Radio=choice('radio'),Toggle=choice('toggle');
function Slider(p){var v=p.value!==undefined?p.value:(p.defaultValue||50);var st=useState(v);var r=p.range;
  if(r){var a=r[0],b=r[1];return h('div',{className:'as-slider'},h('div',{className:'as-slider-track'},h('div',{className:'as-slider-fill',style:{left:a+'%',width:(b-a)+'%'}}),h('span',{className:'as-slider-handle',style:{left:a+'%'}}),h('span',{className:'as-slider-handle',style:{left:b+'%'}})));}
  return h('div',{className:'as-slider'},h('input',{type:'range',min:0,max:100,value:st[0],onChange:function(e){st[1](+e.target.value);},style:{'--v':st[0]+'%'},'aria-label':p.label||'Value'}));}
function FileUpload(p){return h('div',{className:cx('as-upload',p.error&&'is-error')},
  h(IconShape,{icon:'upload-cloud-02',size:'md'}),
  h('div',null,h('span',{className:'as-upload-link'},'Click to upload'),' or drag and drop'),
  h('div',{className:'as-upload-sub'},p.subtext||'SVG, PNG, JPG or GIF (max. 800x400px)'),
  p.error?h('div',{className:'as-field-sub is-error'},p.error):null);}
function UploadedFile(p){var pct=p.progress===undefined?100:p.progress;return h('div',{className:'as-file'},
  h(IconShape,{icon:'file-06',size:'md'}),
  h('div',{className:'as-file-main'},h('div',{className:'as-file-name'},p.name||'File Name.png'),h('div',{className:'as-file-size'},p.size||'200 kb'),
    pct<100?h(ProgressBar,{value:pct,label:true}):null),
  pct<100?null:h(Icon,{name:'check-circle',size:16,className:'as-file-ok'}));}

/* Navigation */
function Breadcrumb(p){var items=p.items||[];return h('nav',{className:'as-crumbs','aria-label':'Breadcrumb'},
  items.map(function(it,i){var last=i===items.length-1;return h(F,{key:i},
    h('span',{className:cx('as-crumb',last&&'is-current'),'aria-current':last?'page':null},it),
    last?null:h(Icon,{name:'chevron-right',size:14,className:'as-crumb-sep'}));}));}
function NavTabs(p){var st=useState(p.defaultValue||0);var sel=p.value!==undefined?p.value:st[0];
  return h('div',{className:'as-tabs',role:'tablist'},(p.tabs||[]).map(function(t,i){var lbl=typeof t==='string'?t:t.label;var ic=typeof t==='string'?null:t.icon;
    return h('button',{key:i,role:'tab','aria-selected':i===sel,className:cx('as-tab',i===sel&&'is-selected'),onClick:function(){st[1](i);p.onChange&&p.onChange(i);}},
      ic?h(Icon,{name:ic,size:16}):null,lbl);}));}
function Pagination(p){var page=p.page||1,total=p.total||1000,per=p.perPage||10;var last=Math.ceil(total/per);
  function nb(ic,lbl,dis){return h('button',{className:'as-pg-btn','aria-label':lbl,disabled:dis},h(Icon,{name:ic,size:16}));}
  return h('div',{className:'as-pg'},nb('chevron-left-double','First',page===1),nb('chevron-left','Previous',page===1),
    h('span',{className:'as-pg-label'},h('b',null,(page-1)*per+1),' to ',h('b',null,Math.min(page*per,total)),' of ',h('b',null,total.toLocaleString())),
    nb('chevron-right','Next',page===last),nb('chevron-right-double','Last',page===last));}
function CarouselDots(p){var n=p.count||5,s=p.step||1;return h('div',{className:'as-dots'},Array.from({length:n},function(_,i){return h('span',{key:i,className:cx('as-dot',i+1===s&&'is-on')});}));}
function Navbar(p){return h('header',{className:'as-navbar'},
  h('div',{className:'as-navbar-left'},h(Logo,{name:p.product}),
    h('div',{className:'as-input as-navbar-search'},h(Icon,{name:'search-md',size:16}),h('input',{placeholder:'Search','aria-label':'Search'}),h('kbd',null,'⌘K'))),
  h('div',{className:'as-navbar-right'},h(TextButton,{leftIcon:'check-circle'},'My Tasks'),
    h('button',{className:'as-bell','aria-label':'Notifications'},h(Icon,{name:'bell-01',size:20}),p.notifications?h('span',{className:'as-bell-dot'}):null),
    h('span',{className:'as-avatar'},p.initials||'AS')));}
function SideNav(p){var st=useState(p.defaultSelected||0);var collapsed=p.collapsed;
  return h('nav',{className:cx('as-sidenav',collapsed&&'is-collapsed')},(p.sections||[{items:p.items||[]}]).map(function(sec,si){
    return h('div',{key:si,className:'as-sidenav-sec'},sec.title&&!collapsed?h('div',{className:'as-sidenav-title'},sec.title):null,
      sec.items.map(function(it,i){var k=si*100+i;var on=st[0]===k;return h('button',{key:i,className:cx('as-sidenav-item',on&&'is-selected'),onClick:function(){st[1](k);},title:collapsed?it.label:null},
        h('span',{className:'as-sidenav-ic'},h(Icon,{name:it.icon||'home-line',size:16})),collapsed?null:h('span',null,it.label));}));}));}

/* Menus, filters, pickers */
function Dropdown(p){var st=useState(!!p.defaultOpen);var open=st[0];var sel=useState(p.value||(p.options&&p.options[0]));
  return h('div',{className:'as-dd'},
    h('button',{type:'button',className:'as-btn as-btn--gray as-btn--base as-dd-trigger','aria-expanded':open,onClick:function(){st[1](!open);}},
      p.icon?h(Icon,{name:p.icon,size:16}):null,h('span',null,p.label||sel[0]),h(Icon,{name:open?'chevron-up':'chevron-down',size:16})),
    open?h('div',{className:'as-menu',role:'listbox'},(p.options||[]).map(function(o){return h('button',{key:o,role:'option','aria-selected':o===sel[0],className:cx('as-menu-item',o===sel[0]&&'is-selected'),onClick:function(){sel[1](o);st[1](false);}},h('span',null,o),o===sel[0]?h(Icon,{name:'check',size:16}):null);})):null);}
function FilterButton(p){return h('button',{type:'button',className:cx('as-fbtn',p.selected&&'is-selected')},
  h('span',{className:'as-fbtn-cat'},p.category||'Category'),
  p.items?h(F,null,h('span',{className:'as-fbtn-op'},p.not?'is not':'is'),h('span',{className:'as-fbtn-val'},p.items),p.count?h('span',{className:'as-fbtn-count'},'+'+p.count):null):null,
  h(Icon,{name:p.selected?'x-close':'chevron-down',size:14}));}
function Calendar(p){var y=p.year||2024,m=p.month===undefined?0:p.month;var first=new Date(y,m,1).getDay();var days=new Date(y,m+1,0).getDate();
  var sel=p.selected||[];var lo=sel[0],hi=sel[1]||sel[0];var cells=[];for(var i=0;i<first;i++)cells.push(null);for(var d=1;d<=days;d++)cells.push(d);
  var mn=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][m];
  return h('div',{className:'as-cal'},
    h('div',{className:'as-cal-head'},h('button',{className:'as-cal-nav','aria-label':'Previous month'},h(Icon,{name:'chevron-left',size:16})),
      h('span',null,mn,' ',y),h('button',{className:'as-cal-nav','aria-label':'Next month'},h(Icon,{name:'chevron-right',size:16}))),
    h('div',{className:'as-cal-grid'},['Su','Mo','Tu','We','Th','Fr','Sa'].map(function(w){return h('span',{key:w,className:'as-cal-wd'},w);}),
      cells.map(function(c,i){if(!c)return h('span',{key:'e'+i});var isSel=c===lo||c===hi;var inR=lo&&hi&&c>lo&&c<hi;
        return h('button',{key:i,className:cx('as-cal-day',isSel&&'is-selected',inR&&'is-range',c===p.today&&'is-today',c===lo&&hi!==lo&&'is-start',c===hi&&hi!==lo&&'is-end')},c);})),
    p.footer!==false?h('div',{className:'as-cal-foot'},h(Button,{color:'gray'},'Cancel'),h(Button,{color:'green'},'Apply')):null);}

/* Overlays & containers */
function Modal(p){return h('div',{className:'as-modal',role:'dialog','aria-modal':true,'aria-label':p.title,style:{width:p.width||400}},
  h('div',{className:'as-modal-head'},h('span',null,p.title),h('button',{className:'as-modal-x','aria-label':'Close',onClick:p.onClose},h(Icon,{name:'x-close',size:16}))),
  h('div',{className:'as-modal-body'},p.children),
  h('div',{className:cx('as-modal-foot',p.footer==='stretch'&&'is-stretch')},
    h(Button,{color:'gray'},p.cancelLabel||'Cancel'),h(Button,{color:p.danger?'red':'green'},p.confirmLabel||'Apply')));}
function Widget(p){return h('section',{className:'as-widget'},
  h('div',{className:'as-widget-head'},h('h3',null,p.icon?h('span',{className:'as-widget-modicon'},h(Icon,{name:p.icon,size:14})):null,p.title,p.titleExtra||null),p.action?h('div',{className:'as-widget-actions'},p.action):null),
  h('div',{className:'as-widget-body'},p.children));}
function StatsWidget(p){var up=p.trend==='up';return h('div',{className:'as-stat'},
  p.icon!==false?h(IconShape,{icon:p.icon||'currency-dollar',size:'lg'}):null,
  h('div',{className:'as-stat-main'},
    h('div',{className:'as-stat-value'},p.value,p.badge?h(Badge,{theme:p.badgeTheme||'gray',size:'sm'},p.badge):null),
    h('div',{className:'as-stat-head'},p.heading,p.tooltip?h(Tooltip,{content:p.tooltip}):null),
    p.delta?h('div',{className:'as-stat-delta'},h('span',{className:up?'is-up':'is-down'},h(Icon,{name:up?'trend-up-01':'trend-down-01',size:14}),p.delta),p.comparison?h('span',{className:'as-stat-cmp'},p.comparison):null):null));}
function ChangeLogCard(p){return h('div',{className:'as-clog'},
  h('div',{className:'as-clog-top'},h('span',{className:'as-avatar as-avatar--sm'},(p.user||'A')[0]),h('span',{className:'as-clog-title'},p.title),p.edited?h('span',{className:'as-clog-meta'},'(edited)'):null),
  p.description?h('div',{className:'as-clog-desc'},p.description):null,
  p.action?h(TextButton,{color:'green',size:'small'},p.action):null);}
function ChartTooltip(p){return h('div',{className:'as-ctip'},h('div',{className:'as-ctip-title'},p.title),
  (p.rows||[]).map(function(r,i){return h('div',{key:i,className:'as-ctip-row'},h('span',{className:'as-swatch',style:{background:'var(--data-'+(r.series||'a').toLowerCase()+'1)'}}),h('span',null,r.label),h('b',null,r.value));}),
  p.subtext?h('div',{className:'as-ctip-sub'},p.subtext):null);}
function LegendItem(p){var s=(p.series||'A').toLowerCase();return h('span',{className:cx('as-legend',p.disabled&&'is-disabled')},
  h('span',{className:'as-swatch',style:{background:'var(--data-'+s+'1)'}}),h('span',{className:'as-legend-name'},p.name),p.value?h('span',{className:'as-legend-val'},p.value):null);}

/* Table */
function Table(p){var cols=p.columns||[],rows=p.rows||[];var sel=useState({});
  function cell(c,r){var v=r[c.key];if(c.type==='badge')return h(Badge,{theme:v&&v.theme||'gray'},v&&v.label||v);
    if(c.type==='actions')return h('button',{className:'as-row-act','aria-label':'Row actions'},h(Icon,{name:'dots-vertical',size:16}));
    if(c.type==='two-row')return h('div',{className:'as-td2'},h('span',null,v[0]),h('span',null,v[1]));return v;}
  return h('div',{className:'as-table-wrap'},h('table',{className:'as-table'},
    h('thead',null,h('tr',null,p.selectable?h('th',{className:'as-th-check'},h(Checkbox,{})):null,cols.map(function(c){return h('th',{key:c.key,style:{textAlign:c.align||(c.type==='number'?'right':'left'),width:c.width}},h('span',{className:'as-th'},c.label,c.sortable?h(Icon,{name:c.sort==='asc'?'arrow-up':'arrow-down',size:12}):null));}))),
    h('tbody',null,rows.map(function(r,i){return h('tr',{key:i},p.selectable?h('td',{className:'as-th-check'},h(Checkbox,{})):null,cols.map(function(c,j){return h('td',{key:c.key,className:cx(j===0&&'is-primary',c.type==='number'&&'is-num'),style:{textAlign:c.align||(c.type==='number'?'right':'left')}},cell(c,r));}));}))),
    p.footer!==false?h('div',{className:'as-table-foot'},h('div',{className:'as-rows'},'Rows per page',h('button',{className:'as-rows-btn'},p.perPage||10,h(Icon,{name:'chevron-down',size:14}))),h(Pagination,{page:p.page||1,total:p.total||rows.length*10,perPage:p.perPage||10})):null);}


/* ---------- Page-level pieces (from the OneLens product files) ---------- */
function IconButton(p){return h('button',{type:'button',className:cx('as-ibtn',p.active&&'is-active',p.size==='sm'&&'as-ibtn--sm',p.className),'aria-label':p.label||p.icon,'aria-pressed':p.active===undefined?null:!!p.active,title:p.label,onClick:p.onClick},h(Icon,{name:p.icon,size:p.size==='sm'?16:16}));}
function SelectButton(p){return h('button',{type:'button',className:cx('as-select',p.className),onClick:p.onClick},
  p.logo?h('span',{className:'as-select-logo'},p.logo):p.icon?h(Icon,{name:p.icon,size:16,className:'as-select-ic'}):null,
  p.label?h('span',{className:'as-select-label'},p.label):null,
  p.label&&p.value?h('span',{className:'as-select-div'}):null,
  p.value?h('span',{className:p.label?'as-select-value':'as-select-label'},p.value):null,
  p.placeholder&&!p.value&&!p.label?h('span',{className:'as-select-ph'},p.placeholder):null,
  h(Icon,{name:p.chevron||'chevron-selector-vertical',size:16,className:'as-select-ic'}));}
function DateRangeButton(p){return h(SelectButton,{icon:'calendar',label:p.preset||'Last 2 Weeks',value:p.range||'19 Jan - 01 Feb, 2025'});}
function SegmentedControl(p){var st=useState(p.defaultValue||0);var sel=p.value!==undefined?p.value:st[0];
  return h('div',{className:cx('as-seg',p.size==='sm'&&'as-seg--sm'),role:'radiogroup','aria-label':p.label},(p.options||[]).map(function(o,i){var on=i===sel;
    return h('button',{key:i,type:'button',role:'radio','aria-checked':on,'aria-label':o.label||o.icon,className:cx('as-seg-opt',on&&'is-on',!o.label&&'is-icon'),onClick:function(){st[1](i);p.onChange&&p.onChange(i);}},
      o.icon?h(Icon,{name:o.icon,size:16}):null,o.label||null);}));}
function SplitSelect(p){return h('div',{className:'as-split'},
  h('span',{className:cx('as-split-label',p.tone==='brand'&&'is-brand')},p.label),
  h('button',{type:'button',className:'as-split-field'},
    p.chips&&p.chips.length?p.chips.map(function(c){return h('span',{key:c,className:'as-chip'},c,h(Icon,{name:'x-circle',size:12}));}):
      h('span',{className:p.value?'as-split-value':'as-select-ph'},p.value||p.placeholder||'Select…'),
    h(Icon,{name:'chevron-down',size:16,className:'as-select-ic'})));}
function Divider(p){return h('span',{className:cx('as-vdiv',p&&p.className),'aria-hidden':true});}

function PageHeader(p){var crumbs=p.breadcrumbs;return h('header',{className:'as-pagehead'},
  h('div',{className:'as-pagehead-left'},
    p.back?h('button',{className:'as-pagehead-back','aria-label':'Back',onClick:p.onBack},h(Icon,{name:'arrow-left',size:20})):null,
    p.back?h(Divider,{}):null,
    p.logo?h('span',{className:'as-select-logo'},p.logo):null,
    crumbs&&crumbs.length?h('nav',{className:'as-pagehead-crumbs','aria-label':'Breadcrumb'},crumbs.map(function(c,i){return h(F,{key:i},h('span',{className:'as-pagehead-crumb'},c),h('span',{className:'as-pagehead-sep'},'/'));}),h('span',{className:'as-pagehead-title','aria-current':'page'},p.title)):
      h('h1',{className:'as-pagehead-title'},p.title),
    p.badges||null),
  p.actions?h('div',{className:'as-pagehead-actions'},p.actions):null);}
function Toolbar(p){return h('div',{className:cx('as-toolbar',p.plain&&'is-plain')},h('div',{className:'as-toolbar-group'},p.left),h('div',{className:'as-toolbar-group as-toolbar-right'},p.right));}
function PageTabs(p){return h('div',{className:'as-pagetabs'},h(NavTabs,p));}
function Section(p){return h('section',{className:cx('as-section',p.className),style:p.style},p.title||p.actions?h('div',{className:'as-section-head'},p.title?h('h2',{className:'as-section-title'},p.title):h('span'),p.actions?h('div',{className:'as-toolbar-group'},p.actions):null):null,p.children);}

/* Stats (product version) */
function Stat(p){return h('div',{className:'as-kpi'},
  h('span',{className:cx('as-kpi-ic','as-kpi-ic--'+(p.tone||'gray'))},h(Icon,{name:p.icon||'currency-dollar',size:16})),
  h('div',{className:'as-kpi-main'},
    h('div',{className:'as-kpi-row'},h('span',{className:cx('as-kpi-value',p.valueTone&&'is-'+p.valueTone)},p.value),
      p.delta?h('span',{className:cx('as-kpi-delta','is-'+(p.deltaTone||(p.trend==='up'?'bad':'good')))},p.delta,h(Icon,{name:p.trend==='down'?'trend-down-01':'trend-up-01',size:12})):null,
      p.note?h(Badge,{theme:p.noteTheme||'purple',size:'sm'},p.note):null),
    h('div',{className:'as-kpi-label'},h('span',null,p.label),p.sublabel?h('span',{className:'as-kpi-sub'},p.sublabel):null,p.info!==false?h(Icon,{name:'info-circle',size:14,className:'as-kpi-info'}):null)),
  p.corner?h('span',{className:'as-kpi-corner'},h(Badge,{theme:p.cornerTheme||'green',size:'sm'},p.corner)):null);}
function StatsRow(p){return h('div',{className:'as-kpis',style:{gridTemplateColumns:'repeat('+(p.columns||(p.items||[]).length||3)+',minmax(0,1fr))'}},(p.items||[]).map(function(s,i){return h(Stat,Object.assign({key:i},s));}));}

/* Feedback */
function Callout(p){var tone=p.tone||'info';var ic={info:'info-circle',warning:'alert-triangle',error:'alert-circle',success:'check-circle',hint:'lightbulb-02'}[tone];
  return h('div',{className:'as-callout as-callout--'+tone,role:tone==='error'||tone==='warning'?'alert':'note'},h(Icon,{name:ic,size:16,className:'as-callout-ic'}),
    h('div',{className:'as-callout-body'},p.title?h('div',{className:'as-callout-title'},p.title):null,p.children));}
function EmptyState(p){return h('div',{className:'as-empty'},p.icon?h(IconShape,{icon:p.icon,size:'lg',color:'gray'}):null,p.title?h('div',{className:'as-empty-title'},p.title):null,h('div',{className:'as-empty-text'},p.children),p.action||null);}
function Stepper(p){var cur=p.current||0;return h('ol',{className:'as-steps'},(p.steps||[]).map(function(s,i){var state=i<cur?'done':i===cur?'current':'todo';
  return h('li',{key:i,className:'as-step is-'+state},h('span',{className:'as-step-dot','aria-hidden':true},state==='done'?h(Icon,{name:'check',size:10,strokeWidth:3}):null),
    h('div',null,h('div',{className:'as-step-title'},s.title),s.description?h('div',{className:'as-step-desc'},s.description):null));}));}

/* Overlays */
function Drawer(p){return h('div',{className:'as-drawer-wrap',style:{height:p.height||null}},h('div',{className:'as-drawer-backdrop'}),
  h('aside',{className:'as-drawer',role:'dialog','aria-label':p.title,style:{width:p.width||'66.6%'}},
    h('div',{className:'as-drawer-head'},h('div',{className:'as-drawer-titlerow'},p.logo?h('span',{className:'as-select-logo'},p.logo):null,h('h2',null,p.title),h('button',{className:'as-modal-x','aria-label':'Close',onClick:p.onClose},h(Icon,{name:'x-close',size:16}))),
      p.badges?h('div',{className:'as-row-tight'},p.badges):null,p.tabs?h(NavTabs,{tabs:p.tabs}):null),
    h('div',{className:'as-drawer-body'},p.children),
    p.footer!==false?h('div',{className:'as-drawer-foot'},h(Button,{color:'gray',size:'md'},p.cancelLabel||'Cancel'),h(Button,{color:'green',size:'md'},p.confirmLabel||'Save')):null));}
function Popover(p){return h('div',{className:'as-popover',role:'dialog','aria-label':p.title},p.title?h('div',{className:'as-popover-title'},p.title):null,
  h('div',{className:'as-popover-body'},p.children),
  h('div',{className:'as-popover-foot'},h(TextButton,{size:'small'},'Cancel'),h(TextButton,{size:'small',color:'green'},p.applyLabel||'Apply')));}
function WizardModal(p){return h('div',{className:'as-wizard',role:'dialog','aria-label':p.title},
  h('div',{className:'as-wizard-head'},p.logo?h('span',{className:'as-select-logo'},p.logo):null,h('span',{className:'as-wizard-title'},p.title),
    p.docsLabel!==false?h('a',{className:'as-link',href:'#'},p.docsLabel||'View docs',h(Icon,{name:'link-external-01',size:14})):null),
  h('div',{className:'as-wizard-body'},h('div',{className:'as-wizard-steps'},h('div',{className:'as-wizard-steps-title'},'Set-up Steps'),h(Stepper,{steps:p.steps,current:p.current})),
    h('div',{className:'as-wizard-main'},h('div',{className:'as-wizard-count'},'Step '+((p.current||0)+1)+' of '+(p.steps||[]).length),h('h3',{className:'as-wizard-h'},p.heading),p.description?h('p',{className:'as-wizard-desc'},p.description):null,p.children)),
  h('div',{className:'as-wizard-foot'},h(Button,{color:'gray',size:'lg',outline:true},'Cancel'),h(Button,{color:p.canContinue?'green':'disabled',size:'lg',rightIcon:'chevron-right'},p.continueLabel||'Continue')));}

/* Cards */
function TileCard(p){return h('button',{type:'button',className:'as-tile'},h('span',{className:'as-tile-ic as-tile-ic--'+(p.tone||'green')},h(Icon,{name:p.icon||'bar-chart-01',size:20})),
  h('span',{className:'as-tile-text'},h('span',{className:'as-tile-title'},p.title),h('span',{className:'as-tile-desc'},p.description)));}
function OptionCard(p){var st=useState(!!p.defaultSelected);var on=p.selected!==undefined?p.selected:st[0];
  return h('label',{className:cx('as-optcard',on&&'is-on')},h('span',{className:'as-optcard-head'},h('input',{type:'checkbox',checked:on,onChange:function(e){st[1](e.target.checked);}}),h('span',{className:'as-choice-box','aria-hidden':true},on?h(Icon,{name:'check',size:12,strokeWidth:3}):null),h('span',{className:'as-optcard-title'},p.title),p.tag?h('span',{className:'as-optcard-tag'},p.tag):null),
    h('span',{className:'as-optcard-desc'},p.description),p.value?h('span',{className:'as-optcard-value'},p.value):null,p.meta?h('span',{className:'as-optcard-meta'},p.meta):null);}
function IntegrationCard(p){return h('div',{className:'as-intg'},h('div',{className:'as-intg-logo'},p.logo||h(Icon,{name:'cloud-01',size:40})),
  h('div',{className:'as-intg-head'},h('span',{className:'as-intg-name'},p.name),p.category?h(Badge,{theme:'gray',size:'sm'},p.category):null),
  h('p',{className:'as-intg-desc'},p.description),
  p.connected?h(Button,{color:'gray',outline:true,leftIcon:'link-broken-01',className:'as-btn--block'},'Disconnect'):h(Button,{color:'green',leftIcon:'plus-circle',className:'as-btn--block'},'Connect'));}
function CodeBlock(p){var lines=String(p.code||'').split('\n');return h('div',{className:'as-code'},h('div',{className:'as-code-head'},h('span',null,p.title||'CODE'),h('span',{className:'as-row-tight'},h(IconButton,{icon:'download-01',size:'sm',label:'Download'}),h(IconButton,{icon:'copy-01',size:'sm',label:'Copy'}))),
  h('pre',null,lines.map(function(l,i){return h('div',{key:i,className:'as-code-line'},h('span',{className:'as-code-n'},i+1),h('code',null,l));})));}
function KeyValueTable(p){return h('table',{className:'as-kv'},h('tbody',null,(p.rows||[]).map(function(r,i){return h('tr',{key:i},h('th',null,r[0]),h('td',null,r[1]));})));}
function Meter(p){var v=p.value;var tone=v==null?'none':v<60?'bad':v<85?'warn':'good';return v==null?h('span',{className:'as-muted'},'-'):h('span',{className:'as-meter is-'+tone},h('span',{className:'as-meter-val'},v.toFixed(1)+'%'),h('span',{className:'as-meter-track'},h('span',{className:'as-meter-fill',style:{width:v+'%'}})));}
function Avatar(p){return h('span',{className:cx('as-avatar',p.size==='sm'&&'as-avatar--sm',p.tone==='gray'&&'as-avatar--gray')},p.initials||(p.name||'?').split(' ').map(function(w){return w[0];}).join('').slice(0,2));}
function ProviderLogo(p){var n=(p.name||'').toLowerCase();var key={'google cloud':'gcp','microsoft azure':'azure','k8s':'kubernetes'}[n]||n;var lib=window.AstutoIconsExtra;
  if(lib&&lib.icons[key])return h('span',{className:'as-prov',title:p.name},h(ExtraIcon,{name:key,size:p.size||16,alt:''}),p.label!==false?p.name:null);
  var c={aws:'#ff9900',gcp:'#4285f4',azure:'#0078d4',oci:'#c74634',kubernetes:'#326ce5'}[key]||'var(--stroke-primary-4)';
  return h('span',{className:'as-prov',title:p.name},h('span',{className:'as-prov-dot',style:{background:c}}),p.label!==false?p.name:null);}

/* Charts (simple, token-driven SVG) */
var SERIES='abcdefghijklmnopqrs'.split('');
function seriesVar(s,i){var k=(s||SERIES[i%SERIES.length]).toLowerCase();return 'var(--data-'+k+'1)';}
function fmtK(v){return v>=1000?'$'+(v/1000).toFixed(1).replace(/\.0$/,'')+'K':'$'+v;}
function Legend(p){return h('div',{className:'as-legend-row'},(p.items||[]).map(function(it,i){return h('span',{key:i,className:'as-legend-dot'},h('span',{className:'as-dot-sw',style:{background:seriesVar(it.series,i)}}),it.name);}));}
function BarChart(p){var cats=p.categories||[];var ser=p.series||[];var W=p.width||1000,H=p.height||260,padL=44,padB=28,padT=22;var n=cats.length;
  var totals=cats.map(function(_,ci){return ser.reduce(function(a,s){return a+(s.values[ci]||0);},0);});var max=p.max||Math.ceil(Math.max.apply(null,totals.concat([1]))/2000)*2000;
  var ticks=[0,.25,.5,.75,1].map(function(t){return Math.round(max*t);});var bw=Math.min(36,(W-padL)/n*0.4);var y=function(v){return padT+(H-padT-padB)*(1-v/max);};
  return h('div',{className:'as-chart'},h('svg',{viewBox:'0 0 '+W+' '+H,width:'100%',role:'img','aria-label':p.title||'Bar chart'},
    ticks.map(function(t,i){return h('g',{key:'t'+i},h('line',{x1:padL,x2:W,y1:y(t),y2:y(t),className:'as-grid'}),h('text',{x:padL-8,y:y(t)+4,textAnchor:'end',className:'as-axis'},fmtK(t)));}),
    cats.map(function(c,ci){var cx0=padL+(W-padL)/n*(ci+.5);var acc=0;var segs=ser.map(function(s,si){var v=s.values[ci]||0;var y1=y(acc+v),y0=y(acc);acc+=v;var top=si===ser.length-1;
        return h('rect',{key:si,x:cx0-bw/2,y:y1,width:bw,height:Math.max(0,y0-y1-(ser.length>1?1.5:0)),rx:top?4:2,style:{fill:seriesVar(s.series,si)}});});
      return h('g',{key:ci},segs,p.valueLabels!==false?h('text',{x:cx0,y:y(totals[ci])-6,textAnchor:'middle',className:'as-axis'},fmtK(totals[ci])):null,h('text',{x:cx0,y:H-8,textAnchor:'middle',className:'as-axis'},c));})),
    h(Legend,{items:ser}));}
function DonutChart(p){var d=p.data||[];var tot=d.reduce(function(a,x){return a+x.value;},0)||1;var R=p.size?p.size/2:70,sw=p.thickness||14,r=R-sw/2,C=2*Math.PI*r,gap=4;var off=0;
  var ring=h('svg',{width:R*2,height:R*2,viewBox:'0 0 '+R*2+' '+R*2,role:'img','aria-label':p.title||'Donut chart',className:'as-donut-svg'},d.map(function(x,i){var len=Math.max(0,C*x.value/tot-gap);var el=h('circle',{key:i,cx:R,cy:R,r:r,fill:'none',strokeWidth:sw,strokeLinecap:'round',strokeDasharray:len+' '+(C-len),strokeDashoffset:-off,transform:'rotate(-90 '+R+' '+R+')',style:{stroke:seriesVar(x.series,i)}});off+=C*x.value/tot;return el;}));
  var legend=h('div',{className:'as-donut-legend'},d.map(function(x,i){return h('div',{key:i,className:'as-donut-li'},h('span',{className:'as-dot-sw',style:{background:seriesVar(x.series,i)}}),x.logo||null,h('span',{className:'as-donut-name'},x.label),h('span',{className:'as-donut-val'},x.display||fmtK(x.value)));}));
  return h('div',{className:cx('as-donut',p.layout==='side'&&'is-side')},p.layout==='side'?legend:ring,p.layout==='side'?ring:legend);}

/* Data table (product version) */
function DataTable(p){var cols=p.columns||[],rows=p.rows||[];
  function cell(c,r){var v=r[c.key];switch(c.type){
    case 'badge':return v?h(Badge,{theme:v.theme||'gray',size:'sm',outline:v.outline},v.label):null;
    case 'chips':return h('span',{className:'as-row-tight'},(v||[]).map(function(x){return h('span',{key:x,className:'as-tag'},x);}));
    case 'provider':return h(ProviderLogo,{name:v});
    case 'meter':return h(Meter,{value:v});
    case 'delta':return v?h('span',{className:'as-delta '+(v.charAt(0)==='-'?'is-good':'is-bad')},v,h(Icon,{name:v.charAt(0)==='-'?'trend-down-01':'trend-up-01',size:12})):null;
    case 'two-row':return h('div',{className:'as-td2'},h('span',null,v[0]),h('span',null,v[1]));
    case 'user':return h('span',{className:'as-row-tight'},h(Avatar,{name:v,size:'sm',tone:'gray'}),v);
    default:return v;}}
  return h('div',{className:'as-dt'},h('div',{className:'as-dt-scroll'},h('table',{className:'as-dt-table'},
    h('thead',null,h('tr',null,p.selectable?h('th',{className:'as-dt-check'},h(Checkbox,{})):null,cols.map(function(c){return h('th',{key:c.key,className:cx(c.sort&&'is-sorted'),style:{textAlign:c.align||(c.type==='number'||c.type==='delta'?'right':'left'),width:c.width}},
      h('span',{className:'as-dt-th'},h('span',null,c.label,c.sub?h('span',{className:'as-dt-sub'},c.sub):null),c.filter?h(Icon,{name:'filter-lines',size:12}):null,c.sort?h(Icon,{name:c.sort==='asc'?'arrow-up':'arrow-down',size:12}):c.sortable?h(Icon,{name:'chevron-selector-vertical',size:12}):null));}),p.actions?h('th',{className:'as-dt-act'}):null)),
    h('tbody',null,rows.map(function(r,i){return h('tr',{key:i},p.selectable?h('td',{className:'as-dt-check'},h(Checkbox,{})):null,cols.map(function(c,j){return h('td',{key:c.key,className:cx(j===0&&'is-primary',(c.type==='number'||c.type==='delta')&&'is-num'),style:{textAlign:c.align||(c.type==='number'||c.type==='delta'?'right':'left')}},cell(c,r));}),
      p.actions?h('td',{className:'as-dt-act'},h('span',{className:'as-row-tight'},p.actions.map(function(a){return h(IconButton,{key:a,icon:a,size:'sm'});}))):null);}),
      p.totalRow?h('tr',{className:'as-dt-total'},p.selectable?h('td'):null,cols.map(function(c,j){return h('td',{key:c.key,style:{textAlign:c.type==='number'?'right':'left'}},j===0?'TOTAL':p.totalRow[c.key]||'');}),p.actions?h('td',{className:'as-dt-act'}):null):null))),
    p.footer!==false?h('div',{className:'as-dt-foot'},h('div',{className:'as-rows'},'Rows per page',h('button',{className:'as-rows-btn'},p.perPage||10,h(Icon,{name:'chevron-down',size:14}))),
      h('div',{className:'as-pg-plain'},h(IconButton,{icon:'chevron-left-double',size:'sm',label:'First'}),h(IconButton,{icon:'chevron-left',size:'sm',label:'Previous'}),h('span',{className:'as-pg-label-plain'},h('b',null,1),' to ',h('b',null,Math.min(p.perPage||10,p.total||rows.length)),' of ',h('b',null,p.total||rows.length)),h(IconButton,{icon:'chevron-right',size:'sm',label:'Next'}),h(IconButton,{icon:'chevron-right-double',size:'sm',label:'Last'}))):null);}

/* Shell v2 */
function AppSideNav(p){var sel=p.selected;return h('nav',{className:'as-snav','aria-label':'Main'},
  h('div',{className:'as-snav-head'},h(Logo,{size:28}),h('button',{className:'as-snav-collapse','aria-label':'Collapse navigation'},h(Icon,{name:'menu-01',size:16}))),
  h('div',{className:'as-snav-search'},h('div',{className:'as-input as-input--sm'},h(Icon,{name:'search-md',size:16}),h('input',{placeholder:'Search','aria-label':'Search'}))),
  h('div',{className:'as-snav-scroll'},(p.sections||[]).map(function(sec,si){return h('div',{key:si,className:'as-snav-sec'},h('div',{className:'as-snav-sechead'},h('span',null,sec.title),h('span',{className:'as-snav-rule'})),
    h('div',{className:'as-snav-items'},sec.items.map(function(it,i){var on=it.label===sel;return h('a',{key:i,href:'#',className:cx('as-snav-item',on&&'is-selected'),'aria-current':on?'page':null},h(Icon,{name:it.icon||'home-line',size:18}),h('span',null,it.label),it.children?h(Icon,{name:'chevron-right',size:16,className:'as-snav-chev'}):null);})));})),
  h('div',{className:'as-snav-foot'},h('div',{className:'as-snav-user'},h(Avatar,{name:(p.user&&p.user.name)||'Jamie Lee'}),h('div',{className:'as-snav-user-text'},h('span',null,(p.user&&p.user.name)||'Jamie Lee'),h('span',{className:'as-snav-email'},(p.user&&p.user.email)||'jamie@acme.io')),h(Icon,{name:'dots-vertical',size:16})),
    h('a',{href:'#',className:'as-snav-item'},h(Icon,{name:'help-circle',size:18}),h('span',null,'Get Help'),h(Icon,{name:'link-external-01',size:14,className:'as-snav-chev'}))));}
var DEFAULT_NAV=[{title:'Observe',items:[{label:'Dashboards',icon:'layout-alt-01',children:1},{label:'Cost Reporting',icon:'line-chart-up-03',children:1},{label:'Unit Economics',icon:'coins-swap-01',children:1},{label:'Cost Watcher',icon:'eye'},{label:'Kubernetes',icon:'server-01'}]},
  {title:'Optimize',items:[{label:'Savings Overview',icon:'coins-stacked-01'},{label:'All Recommendations',icon:'target-04'},{label:'Data Transfer',icon:'bar-line-chart',children:1}]},
  {title:'Automate',items:[{label:'Tickets',icon:'ticket-01'},{label:'Workflows',icon:'lightning-01'}]},
  {title:'Govern',items:[{label:'Tag Governance',icon:'tag-01'},{label:'Policies',icon:'shield-tick'}]},
  {title:'Setup',items:[{label:'Integrations',icon:'link-broken-01'},{label:'Settings',icon:'users-01'}]}];
function AppShell(p){return h('div',{className:'as-shell',style:{height:p.height||null}},h(AppSideNav,{sections:p.nav||DEFAULT_NAV,selected:p.selected,user:p.user}),
  h('div',{className:'as-shell-main'},p.header||null,p.tabs?h(PageTabs,{tabs:p.tabs}):null,p.toolbar||null,h('div',{className:'as-shell-content'},p.children)));}
AppShell.defaultNav=DEFAULT_NAV;

window.Astuto=window.Astuto||{};
Object.assign(window.Astuto,{Icon:Icon,Logo:Logo,ExtraIcon:ExtraIcon,IconGallery:IconGallery,Button:Button,TextButton:TextButton,Badge:Badge,FilterToggle:FilterToggle,IconShape:IconShape,ProgressBar:ProgressBar,Toast:Toast,Tooltip:Tooltip,
 Input:Input,TextArea:TextArea,Checkbox:Checkbox,Radio:Radio,Toggle:Toggle,Slider:Slider,FileUpload:FileUpload,UploadedFile:UploadedFile,
 Breadcrumb:Breadcrumb,NavTabs:NavTabs,Pagination:Pagination,CarouselDots:CarouselDots,Navbar:Navbar,SideNav:SideNav,
 Dropdown:Dropdown,FilterButton:FilterButton,Calendar:Calendar,Modal:Modal,Widget:Widget,StatsWidget:StatsWidget,ChangeLogCard:ChangeLogCard,ChartTooltip:ChartTooltip,LegendItem:LegendItem,Table:Table,
 IconButton:IconButton,SelectButton:SelectButton,DateRangeButton:DateRangeButton,SegmentedControl:SegmentedControl,SplitSelect:SplitSelect,Divider:Divider,PageHeader:PageHeader,Toolbar:Toolbar,PageTabs:PageTabs,Section:Section,Stat:Stat,StatsRow:StatsRow,Callout:Callout,EmptyState:EmptyState,Stepper:Stepper,Drawer:Drawer,Popover:Popover,WizardModal:WizardModal,TileCard:TileCard,OptionCard:OptionCard,IntegrationCard:IntegrationCard,CodeBlock:CodeBlock,KeyValueTable:KeyValueTable,Meter:Meter,Avatar:Avatar,ProviderLogo:ProviderLogo,Legend:Legend,BarChart:BarChart,DonutChart:DonutChart,DataTable:DataTable,AppSideNav:AppSideNav,AppShell:AppShell});
})();

// src/App.js
function App() {
    const [activePage, setActivePage] = React.useState('home'); // Default page

    let pageContent;
    switch (activePage) {
        case 'home':
            pageContent = <HomePage />;
            break;
        case 'adder':
            pageContent = <AdderPage />;
            break;
        case 'translator':
            pageContent = <TranslatorPage />;
            break;
        case 'multiplier':
            pageContent = <MultiplicationTablePage />;
            break;
        case 'experience':
            pageContent = <ExperiencePage />;
            break;
        default:
            pageContent = <HomePage />;
    }

    return (
        <div className="app-container">
            <Navbar setActivePage={setActivePage} activePage={activePage} />
            <div className="page-content">
                {pageContent}
            </div>
        </div>
    );
}

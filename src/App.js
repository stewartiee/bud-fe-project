import { PageHeader, PageSection } from './libs/ui/layout';
import TransactionsList from '~/feature/transactions-list/transactions-list';

export function App() {
    return (
        <PageSection>
            <PageHeader>
                <h1>Bud - Front End Technical Test</h1>
                <p>
                    Here’s your smallest expenses, sorted smallest to largest.
                </p>
            </PageHeader>
            <main>
                <TransactionsList limit={10} />
            </main>
        </PageSection>
    );
}

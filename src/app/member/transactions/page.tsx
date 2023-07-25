import LatestTransactionTable from "@/components/organisms/LatestTransactionTable";
import TransactionTab from "@/components/organisms/LatestTransactionTable/TransactionTab";
import SideBar from "@/components/organisms/Sidebar";

export default function Page() {
    return (
        <section className="transactions overflow-auto">
            <SideBar activeMenu="transaction" />
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                        My Transactions
                    </h2>
                    <div className="mb-30">
                        <p className="text-lg color-palette-2 mb-12">
                            You’ve spent
                        </p>
                        <h3 className="text-5xl fw-medium color-palette-1">
                            Rp 4.518.000.500
                        </h3>
                    </div>
                    <div className="row mt-30 mb-20">
                        <div className="col-lg-12 col-12 main-content">
                            <TransactionTab />
                        </div>
                    </div>
                    <LatestTransactionTable actionButton />
                </div>
            </main>
        </section>
    );
}

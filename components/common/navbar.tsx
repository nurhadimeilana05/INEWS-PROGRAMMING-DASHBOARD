import { navigation } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav
            aria-label="Navigasi utama"
            className="dashboard-tabs"
        >
            <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                className="dashboard-tab"
            >
                HOME
            </Link>
            {navigation.map((item) => {
                const isActive = item.href.startsWith("/") && pathname.startsWith(item.href);
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className="dashboard-tab"
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}

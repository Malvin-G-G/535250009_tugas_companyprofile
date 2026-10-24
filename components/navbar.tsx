'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navStuff = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            backgroundColor: '#121212',
            borderBottom: '1px solid #2a2a2a',
        }}
        >
        {/* Brand*/}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
            style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#76b900',
                display: 'inline-block',
            }}
            />
            <strong style={{ fontSize: '18px', letterSpacing: '1px', color: '#ffffff' }}>
            THE<span style={{ color: '#76b900' }}>_Company</span>
            </strong>
        </div>

        {/* Nav Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
            {navStuff.map((stuff) => {
            const isActive =
                stuff.href === '/'
                ? pathname === '/'
                : pathname.startsWith(stuff.href);

            return (
                <Link
                key={stuff.href}
                href={stuff.href}
                style={{
                    display: 'inline-block',
                    padding: '8px 18px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease',

                    backgroundColor: isActive ? '#76b900' : '#1a1a1a',
                    color: isActive ? '#000000' : '#a1a1aa',
                    border: isActive ? '1px solid #76b900' : '1px solid #2a2a2a',
                    boxShadow: isActive ? '0 0 12px rgba(118, 185, 0, 0.4)' : 'none',
                }}
                >
                {stuff.label}
                </Link>
            );
            })}
        </div>
        </nav>
    );
}
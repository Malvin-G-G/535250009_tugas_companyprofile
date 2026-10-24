import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    { id: 'web-development', name: 'Web Development' },
    { id: 'ui-design', name: 'UI/UX Design' },
    { id: 'consulting', name: 'IT Consulting' },
  ];

  return (
    <section>
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link href={`/services/${service.id}`}>
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
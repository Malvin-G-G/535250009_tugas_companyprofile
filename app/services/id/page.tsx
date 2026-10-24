interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;

  return (
    <section>
      <h1>Service Detail</h1>
      <p>You are viewing detail for service ID: <strong>{id}</strong></p>
    </section>
  );
}
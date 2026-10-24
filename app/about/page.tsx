export default function AboutPage() {
  return (
    <section>
      <h1>About Us</h1>
      <p>We are a 100% Human runned company doing human job and human employment.</p>
      <div
        className="card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 20px',
          marginTop: '32px',
          textAlign: 'center',
        }}>

        <div
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            backgroundColor: '#0a0a0a',
            border: '3px solid #76b900',
            boxShadow: '0 0 20px rgba(118, 185, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}>

          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a2a2a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>

        <h2 style={{ fontSize: '26px', color: '#ffffff', margin: '8px 0 4px 0' }}>
          Malvin G. Gunawan / Human 1
        </h2>

        <p
          style={{
            color: '#76b900',
            fontWeight: 'bold',
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>

          535250009
        </p>
      </div>
    </section>
  );
}
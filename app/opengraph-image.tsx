import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Dibbayajyoti Roy - Design Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <div style={{ fontSize: '72px', fontWeight: 'bold' }}>
            Dibbayajyoti Roy
          </div>
          <div style={{ fontSize: '48px', color: '#9ca3af' }}>
            design engineering and comms
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

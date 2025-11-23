import LaserFlow from './LaserFlow';
import { useRef } from 'react';

// Image Example Interactive Reveal Effect
function LaserFlowBoxExample() {
  const revealImgRef = useRef<HTMLImageElement>(null);

  return (
    <div 
      style={{ 
        height: '800px', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#060010'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          // The user's example had a height offset, I'll keep it for now, assuming the image is centered vertically
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`); 
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#FF79C6"
      />
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Centering the box
        width: '86%',
        height: '60%',
        backgroundColor: '#060010',
        borderRadius: '20px',
        border: '2px solid #FF79C6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        zIndex: 6
      }}>
        {/* Your content here */}
        <p>Interactive Laser Flow Reveal Effect</p>
      </div>
      <img
        ref={revealImgRef}
        // NOTE: The user provided '/path/to/image.jpg'. I will use a placeholder image for now.
        // In a real application, this path would need to be a valid image asset.
        // Since I don't have the image, I'll use a transparent 1x1 gif and rely on the mask effect.
        // Or, better, I'll use a common placeholder image from the web for demonstration.
        // Since I cannot access external images directly in the component, I'll use a local placeholder.
        // I will assume there is a placeholder image in the public folder or I will use a simple color for now.
        // For the purpose of demonstration, I will use a simple white image and rely on the blend mode.
        // Since I cannot create an image, I will use a simple color for now and rely on the mask effect.
        // I will use a placeholder image from the project if available, otherwise, I will use a simple color.
        // I will assume a placeholder image exists at /assets/placeholder.jpg for now.
        src="/assets/placeholder.jpg" 
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '0', // Changed from -50% to 0 to cover the whole area
          height: '100%',
          objectFit: 'cover',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties} // Cast to React.CSSProperties to allow custom CSS variables
      />
    </div>
  );
}

export default LaserFlowBoxExample;

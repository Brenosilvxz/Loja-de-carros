import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Html } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import "./Sobre.css";

function Carro3D() {
  // Coloque seu modelo dentro da pasta public/models
  const { scene } = useGLTF("/Models/car.glb");

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <primitive
        object={scene}
        scale={0.3}
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </Float>
  );
}

export default function Sobre() {
  return (
    <section className="sobre">
      <div className="texto">
        <span className="tag">SOBRE A MEECARS</span>

        <h1>Onde a paixão por carros encontra a tecnologia.</h1>

        <p>
          A MeeCars é uma plataforma desenvolvida para quem busca veículos com
          qualidade, segurança e uma experiência digital moderna. Nosso objetivo
          é conectar pessoas aos melhores automóveis através de um catálogo
          elegante, intuitivo e completo.
        </p>

        <div className="cards">
          <div className="card">
            <h3>🚗 Veículos Premium</h3>
            <p>
              Selecionamos modelos esportivos, SUVs, sedãs e superesportivos.
            </p>
          </div>

          <div className="card">
            <h3>⚡ Tecnologia</h3>
            <p>
              Desenvolvida em React para oferecer rapidez e uma navegação
              fluida.
            </p>
          </div>

          <div className="card">
            <h3>⭐ Confiança</h3>
            <p>Informações completas e uma experiência focada no usuário.</p>
          </div>
        </div>
      </div>

      <div className="modelo3d">
        <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Suspense
            fallback={
              <Html center>
                <h3>Carregando...</h3>
              </Html>
            }
          >
            <Carro3D />
            <Environment preset="city" />
          </Suspense>

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </section>
  );
}

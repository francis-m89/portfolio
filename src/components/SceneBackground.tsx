import studio from '../assets/skills-studio-3d.png'

export function SceneBackground() {
  return (
    <div className="scene-bg" aria-hidden="true">
      <img className="scene-image" src={studio} alt="" />
      <div className="scene-veil" />
    </div>
  )
}

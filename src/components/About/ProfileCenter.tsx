export default function ProfileCenter() {
  return (
    <div className="profile-center">
      <img
        src={`${import.meta.env.BASE_URL}itsme.jpg`}
        alt="Profile"
        className="profile-image"
      />
    </div>
  )
}

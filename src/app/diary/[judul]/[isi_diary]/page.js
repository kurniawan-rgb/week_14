import "../../../../styles/diarypost.css";

export default function DiaryPost({ params }) {
  const { judul, isi_diary } = params;

  return (
    <div className="diary-post-container">
      <h1>{decodeURIComponent(judul)}</h1>
      <p>{decodeURIComponent(isi_diary)}</p>
    </div>
  );
}

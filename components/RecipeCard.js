import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields

  return (
    <div className="card">
      <div className="featured">
        <Image 
          className='recipe-img'
          src={'https:' + thumbnail.fields.file.url}
          width={500}
          height={300}
        />
        
        </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          <p>Takes approx { cookingTime } mins to make</p>
        </div>
        <div className="actions">
          <Link style={{
              color: '#fff',
              background: '#f01b29',
              padding: '16px 24px',
              textDecoration: 'none'
            }} href={'/recipes/' + slug}>Cook this</Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
          width:90%;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  )
}
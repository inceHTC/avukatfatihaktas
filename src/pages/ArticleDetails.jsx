import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articlesData.js'
import { Container } from 'react-bootstrap'
import './ArticleDetails.css'

function ArticleDetails() {
  const { id } = useParams()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return <Container className="text-light mt-5">Makale bulunamadı.</Container>
  }

  return (
    <Container className="article-details-container">
      <h1 className="article-details-title">{article.title}</h1>
      <p className="article-details-date">{article.date}</p>
      <div
        className="article-details-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <Link to="/makaleler" className="back-button">← Tüm makalelere dön</Link>
    </Container>
  )
}

export default ArticleDetails

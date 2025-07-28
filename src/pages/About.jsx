import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import fotoF from '../images/fotoF.jpg'
import '../components/Hakkimda.css'

function Hakkimda() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#1e1e1e', color: '#e0e0e0', minHeight: '80vh', paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: '700' }}>
          Avukat Fatih Aktaş Kimdir?
        </h2>
        <Row className="gx-3 gy-3 align-items-center">
<Col md={6} className="pe-3 profile-col">
  <img src={fotoF} alt="Avukat Fatih Aktaş" className="profile-image" />
</Col>


          <Col md={6}className="pe-3">

          
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi debitis ex vitae labore asperiores aliquam, architecto fuga eligendi eos nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe quis iusto a tempore quidem ab facilis? A, quo asperiores, similique eum nam, sunt voluptatibus inventore aspernatur consectetur id qui!
            </p>
            <hr />
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis impedit cum rerum quasi cumque necessitatibus molestias eos deleniti iure facilis, libero, recusandae saepe nemo fugit aut consequuntur quos perferendis?
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              Müvekkillerine dürüstlük, gizlilik ve etkin çözüm ilkeleri
              çerçevesinde hizmet sunmayı ilke edinmiştir. Her davaya özel
              olarak yaklaşmakta ve çözüm odaklı stratejilerle ilerlemektedir.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Hakkimda;

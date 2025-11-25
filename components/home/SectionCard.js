import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from '@emotion/styled';

function Card({ imageSource, name, categories, bg }) {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link href={`/${name.toLowerCase()}`} as={`/${name.toLowerCase()}`} legacyBehavior passHref>
        <div className={`custom-section-card ${bg}`}>
          <div className="custom-section-card-header">
            <Image src={imageSource} alt={name} width={500} height={500} />
          </div>
          <div className="custom-section-card-body">
            <CenterText>
              <h4>{name}</h4>
            </CenterText>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Card;

const CenterText = styled.div`
  padding-top: 2.5rem;
  text-align: center;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
`;

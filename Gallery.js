import React from 'react';
import Layout from './Layout';
import '../styles/gallery.css';

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300'
];

const Gallery = () => (
  <Layout>
    <h1>Gallery</h1>
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt="" />
      ))}
    </div>
  </Layout>
);

export default Gallery;
import './style.css'
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('scene');
const app = new Application(canvas);
app.load('/scene.splinecode');

# Welcome to My Portfolio

<div align="center">
  <div class='ongoing'>
    <span class='pulse-dot'></span>
    Under Development
    <span class='spinner'></span>
  </div>
</div>

<style>
.ongoing {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 2px 10px rgba(255, 107, 53, 0.83);
  margin: 10px 0;
  animation: glow 2s ease-in-out infinite alternate;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #51ff00;
  border-radius: 50%;
  box-shadow: 
    0 0 10px #51ff00,
    0 0 20px #51ff00,
    0 0 30px #51ff00,
    inset 0 0 5px rgba(255, 255, 255, 0.5);
  animation: pulse-glow 1.5s ease-in-out infinite;
}

.spinner {
  width: 14px;
  height: 14px;
  border: 2.5px solid rgba(255, 255, 255, 0.1);
  border-left: 2.5px solid #51ff00;
  border-top: 2.5px solid #51ff00;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(81, 255, 0, 0.1) 0%, transparent 70%);
  box-shadow: 
    0 0 15px rgba(81, 255, 0, 0.4),
    inset 0 0 10px rgba(81, 255, 0, 0.2);
  animation: spin-gravity 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
}

@keyframes pulse-glow {
  0%, 100% { 
    opacity: 0.8;
    transform: scale(1);
    box-shadow: 
      0 0 5px #51ff00,
      0 0 10px #51ff00,
      0 0 15px #51ff00,
      inset 0 0 3px rgba(255, 255, 255, 0.3);
  }
  50% { 
    opacity: 1;
    transform: scale(1.4);
    box-shadow: 
      0 0 15px #51ff00,
      0 0 25px #51ff00,
      0 0 35px #51ff00,
      0 0 45px rgba(81, 255, 0, 0.3),
      inset 0 0 8px rgba(255, 255, 255, 0.6);
  }
}

@keyframes spin-gravity {
  0% { 
    transform: rotate(0deg);
  }
  10% { 
    transform: rotate(18deg);
  }
  25% { 
    transform: rotate(45deg);
  }
  40% { 
    transform: rotate(108deg);
  }
  50% { 
    transform: rotate(180deg);
  }
  65% { 
    transform: rotate(234deg);
  }
  75% { 
    transform: rotate(270deg);
  }
  85% { 
    transform: rotate(324deg);
  }
  100% { 
    transform: rotate(360deg);
  }
}

@keyframes glow {
  0% { box-shadow: 0 2px 10px #f7921ed7; }
  100% { box-shadow: 0 4px 20px rgba(255, 107, 53, 0.6); }
}
</style>

---
<div style='margin:5vh'></div>



![Development Status](https://img.shields.io/badge/Status-Under%20Development-orange?style=for-the-badge)
![Content](https://img.shields.io/badge/Content-Being%20Added-blue?style=for-the-badge)
![Progress](https://img.shields.io/badge/Progress-80%25-green?style=for-the-badge)

## 🚧 Development Status

> **Note:** This portfolio is currently under active development! Final content, projects, and features are being added regularly. You may find some broken informations.

### What's Coming Soon:
- ✅ Complete project showcases
- ✅ Enhanced UI/UX improvements  
- ✅ Additional interactive features
- ✅ Performance optimizations
- ✅ Mobile responsiveness enhancements

---

Hey there! Welcome to my portfolio website. Here, you can find information about me, my projects, and more.

## View Live Website

Check out my portfolio live [HERE](https://zafar-dev-portfolio.vercel.app/) 🚀!

> ⚠️ **Please note:** Some sections may be incomplete as I'm continuously adding new content and features.

## Contact Me
Connect with me on [LinkedIn](https://www.linkedin.com/in/md-z-41687b157).

---

⭐ **Star this repo** if you like my work and want to follow my development journey!

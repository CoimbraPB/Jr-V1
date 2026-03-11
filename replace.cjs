const fs = require('fs');
const file = 'src/pages/BespokeBuilds.tsx';
let content = fs.readFileSync(file, 'utf8');

// The regex needs to match:
// <motion.img 
//   style={{ x: useTransform(scrollYProgress, [0, 1], ['-20%', '20%']) }}
//   src="..." 
//   alt="..." 
//   className="..."
//   referrerPolicy="no-referrer"
// />
// and replace it with:
// <ParallaxImage src="..." alt="..." className="..." />

content = content.replace(
  /<motion\.img\s+style=\{\{\s*x:\s*useTransform\(scrollYProgress,\s*\[0,\s*1\],\s*\['-20%',\s*'20%'\]\)\s*\}\}\s+src="([^"]+)"\s+alt="([^"]+)"\s+className="([^"]+)"\s+referrerPolicy="no-referrer"\s*\/>/g,
  '<ParallaxImage src="$1" alt="$2" className="$3" />'
);

fs.writeFileSync(file, content);
console.log('Done');

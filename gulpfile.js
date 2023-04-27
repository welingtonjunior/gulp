import gulp from 'gulp'; // Importa o módulo do Gulp
import concat from 'gulp-concat'; // Importa o módulo gulp-concat para concatenar arquivos
import cssmin from 'gulp-cssmin'; // Importa o módulo gulp-cssmin para minificar arquivos CSS
import rename from 'gulp-rename'; // Importa o módulo gulp-rename para renomear arquivos
import uglify from 'gulp-uglify'; // Importa o módulo gulp-uglify para minificar arquivos JS
import image from 'gulp-image';

// Define a função tarefasCSS para minificar arquivos CSS
function tarefasCSS(cb) {

  return gulp.src('./vendor/**/*.css') // Seleciona todos os arquivos CSS na pasta ./vendor e subpastas
    .pipe(concat('libs.css')) // Concatena todos os arquivos selecionados em um único arquivo chamado libs.css
    .pipe(cssmin()) // Minifica o arquivo CSS
    .pipe(rename({ suffix: '.min' })) // Renomeia o arquivo para libs.min.css
    .pipe(gulp.dest('./dist/css')); // Salva o arquivo final na pasta ./dist/css
}

// Define a função tarefasJS para minificar arquivos JS
function tarefasJS() {

  return gulp.src('./vendor/**/*.js') // Seleciona todos os arquivos JS na pasta ./vendor e subpastas
    .pipe(concat('.libs.js')) // Concatena todos os arquivos selecionados em um único arquivo chamado .libs.js
    .pipe(uglify()) // Minifica o arquivo JS
    .pipe(rename({ suffix: '.min' })) // Renomeia o arquivo para .libs.min.js
    .pipe(gulp.dest('./dist/js')); // Salva o arquivo final na pasta ./dist/js
}

function tarefasImagem() {
  return gulp.src('./src/images/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true

    }))
    .pipe(gulp.dest('./dist/images'));
}

// Exporta as funções para que possam ser chamadas pelo Gulp
export const styles = tarefasCSS; // Exporta a função tarefasCSS como "styles"
export const scripts = tarefasJS; // Exporta a função tarefasJS como "scripts"
export const images = tarefasImagem;


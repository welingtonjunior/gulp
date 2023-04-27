const gulp = require('gulp'); // Importa o módulo do Gulp
const concat = require('gulp-concat'); // Importa o módulo gulp-concat para concatenar arquivos
const cssmin = require('gulp-cssmin'); // Importa o módulo gulp-cssmin para minificar arquivos CSS
const rename = require('gulp-rename'); // Importa o módulo gulp-rename para renomear arquivos
const GulpUglify = require('gulp-uglify'); // Importa o módulo gulp-uglify para minificar arquivos JS

// Define a função tarefasCSS para minificar arquivos CSS
function tarefasCSS (cb) {

    return  gulp.src('./vendor/**/*.css') // Seleciona todos os arquivos CSS na pasta ./vendor e subpastas
        .pipe(concat('libs.css')) // Concatena todos os arquivos selecionados em um único arquivo chamado libs.css
        .pipe(cssmin()) // Minifica o arquivo CSS
        .pipe(rename({ suffix: '.min'})) // Renomeia o arquivo para libs.min.css
        .pipe(gulp.dest('./dist/css')); // Salva o arquivo final na pasta ./dist/css
}

// Define a função tarefasJS para minificar arquivos JS
function tarefasJS() {

    return gulp.src('./vendor/**/*.js') // Seleciona todos os arquivos JS na pasta ./vendor e subpastas
    .pipe(concat('.libs.js')) // Concatena todos os arquivos selecionados em um único arquivo chamado .libs.js
    .pipe(GulpUglify()) // Minifica o arquivo JS
    .pipe(rename({ suffix: '.min'})) // Renomeia o arquivo para .libs.min.js
    .pipe(gulp.dest('./dist/js')); // Salva o arquivo final na pasta ./dist/js
}

// Exporta as funções para que possam ser chamadas pelo Gulp
exports.styles = tarefasCSS; // Exporta a função tarefasCSS como "styles"
exports.scripts = tarefasJS; // Exporta a função tarefasJS como "scripts"

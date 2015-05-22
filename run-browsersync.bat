@echo off

@cd html1
browser-sync start --server --files "*.html, content/css/*.css, app/*.js, **/*.html, app/**/*"
@cd ..
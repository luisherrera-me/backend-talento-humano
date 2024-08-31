# Usar la imagen oficial de MySQL como base
FROM mysql:8.0

# Configurar las variables de entorno para MySQL
ENV MYSQL_DATABASE=talentohumanosin_posesio \
    MYSQL_USER=admin \
    MYSQL_PASSWORD=admin009 \
    MYSQL_ROOT_PASSWORD=admin009

# Copiar un archivo .sql para inicializar la base de datos (opcional)
# COPY ./init.sql /docker-entrypoint-initdb.d/

# Exponer el puerto 3306 para que MySQL esté accesible
EXPOSE 3306

# Definir el comando por defecto al iniciar el contenedor
CMD ["mysqld"]


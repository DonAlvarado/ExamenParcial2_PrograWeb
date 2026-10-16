USE Tienda;
GO

-- ==========================================
-- 1. TABLA EMPLEADOS
-- ==========================================

CREATE TABLE Empleados
(
    EmpleadoID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Apellido NVARCHAR(100) NOT NULL,
    Correo NVARCHAR(150) NOT NULL UNIQUE,
    Puesto NVARCHAR(100) NOT NULL,
    Salario DECIMAL(10,2) NOT NULL,
    FechaRegistro DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT CK_Empleados_Salario
        CHECK (Salario >= 0)
);
GO

-- ==========================================
-- 2. TABLA PRODUCTOS
-- ==========================================

CREATE TABLE Productos
(
    ProductoID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(150) NOT NULL,
    Categoria NVARCHAR(100) NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL DEFAULT 0,
    FechaRegistro DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT CK_Productos_Precio
        CHECK (Precio >= 0),

    CONSTRAINT CK_Productos_Stock
        CHECK (Stock >= 0)
);
GO

-- ==========================================
-- 3. TABLA PROYECTOS
-- ==========================================

CREATE TABLE Proyectos
(
    ProyectoID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(150) NOT NULL,
    Descripcion NVARCHAR(500),
    ResponsableID INT NOT NULL,
    Estado NVARCHAR(30) NOT NULL DEFAULT 'Pendiente',
    FechaInicio DATE NOT NULL,
    FechaLimite DATE NOT NULL,

    CONSTRAINT FK_Proyectos_Empleados
        FOREIGN KEY (ResponsableID)
        REFERENCES Empleados(EmpleadoID),

    CONSTRAINT CK_Proyectos_Estado
        CHECK (Estado IN (
            'Pendiente',
            'En progreso',
            'Completado'
        )),

    CONSTRAINT CK_Proyectos_Fechas
        CHECK (FechaLimite >= FechaInicio)
);
GO


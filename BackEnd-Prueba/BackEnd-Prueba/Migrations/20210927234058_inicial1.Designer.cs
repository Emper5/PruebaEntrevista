﻿// <auto-generated />
using BackEnd_Prueba;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BackEnd_Prueba.Migrations
{
    [DbContext(typeof(AplicationDBContext))]
    [Migration("20210927234058_inicial1")]
    partial class inicial1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.19")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BackEnd_Prueba.Models.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Brand")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("Price")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("Year")
                        .IsRequired()
                        .HasColumnType("varchar(4)");

                    b.HasKey("Id");

                    b.ToTable("Car");
                });
#pragma warning restore 612, 618
        }
    }
}
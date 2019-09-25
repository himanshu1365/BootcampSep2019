using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace auth.Models
{
    public partial class auth_databaseContext : DbContext
    {
        public virtual DbSet<UserData> UserData { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string cn = @"Server=CYG238;Database=auth_database;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(cn);
            base.OnConfiguring(optionsBuilder);
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserData>(entity =>
            {
                entity.HasKey(e => e.Email);

                entity.ToTable("user_data");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.CollegeId)
                    .HasColumnName("CollegeId")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CollegeName)
                    .HasColumnName("CollegeName")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });
        }
    }
}

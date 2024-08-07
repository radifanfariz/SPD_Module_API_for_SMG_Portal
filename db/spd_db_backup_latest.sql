PGDMP         	                {            postgres    15.3    15.2 x    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE        CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3540                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            s           1247    24630    enumAkomodasi    TYPE     j   CREATE TYPE public."enumAkomodasi" AS ENUM (
    'Hotel',
    'Rumah Kerabat/ Keluarga',
    'Lainnya'
);
 "   DROP TYPE public."enumAkomodasi";
       public          postgres    false            �           1247    24756    enumAtasanJenis    TYPE     S   CREATE TYPE public."enumAtasanJenis" AS ENUM (
    'Pengajuan',
    'Realisasi'
);
 $   DROP TYPE public."enumAtasanJenis";
       public          postgres    false            �           1247    24746    enumAtasanRespon    TYPE     z   CREATE TYPE public."enumAtasanRespon" AS ENUM (
    'Belum direspon',
    'Diterima',
    'Direvisi',
    'Dibatalkan'
);
 %   DROP TYPE public."enumAtasanRespon";
       public          postgres    false                       1247    24654 	   enumJenis    TYPE     U   CREATE TYPE public."enumJenis" AS ENUM (
    'Perjalanan Dinas',
    'Penempatan'
);
    DROP TYPE public."enumJenis";
       public          postgres    false            �           1247    24849    enumJenisBiaya    TYPE     �   CREATE TYPE public."enumJenisBiaya" AS ENUM (
    'Uang Saku/Makan',
    'Biaya Penginapan',
    'Biaya Transport',
    'Biaya Lain-lain'
);
 #   DROP TYPE public."enumJenisBiaya";
       public          postgres    false            �           1247    24902    enumRealisasiKetJenis    TYPE     ~   CREATE TYPE public."enumRealisasiKetJenis" AS ENUM (
    'Lebih Bayar',
    'Kurang Bayar',
    'Tidak Bayar',
    'Nihil'
);
 *   DROP TYPE public."enumRealisasiKetJenis";
       public          postgres    false            �           1247    24928 
   enumStatus    TYPE     q  CREATE TYPE public."enumStatus" AS ENUM (
    'New',
    'Approved by Atasan',
    'Approved by HRD',
    'Approved by Finance',
    'Realisasi',
    'Realisasi-Aprroved by Atasan',
    'Realisasi-Aprroved by HRD',
    'Realisasi-Aprroved by Finance',
    'Done',
    'Canceled',
    'Realisasi-Approved By HRD - Bukti Transfer',
    'Realisasi-Approved By HRD - 2'
);
    DROP TYPE public."enumStatus";
       public          postgres    false            g           1247    24600    enumTransportasi    TYPE     �   CREATE TYPE public."enumTransportasi" AS ENUM (
    'Pesawat Udara',
    'Kendaraan Dinas Operasional',
    'Kereta Api',
    'Lainnya'
);
 %   DROP TYPE public."enumTransportasi";
       public          postgres    false            j           1247    24591    enumTujuanDinas    TYPE     �   CREATE TYPE public."enumTujuanDinas" AS ENUM (
    'Training TTC/Main Dealer',
    'Training/Workshop/Seminar Lainnya',
    'Lainnya Wilayan Non IBT',
    'Lainnya Wilayah IBT'
);
 $   DROP TYPE public."enumTujuanDinas";
       public          postgres    false            v           1247    24638    enumUangMuka    TYPE     J   CREATE TYPE public."enumUangMuka" AS ENUM (
    'Tidak Ada',
    'Ada'
);
 !   DROP TYPE public."enumUangMuka";
       public          postgres    false            �           1247    24784    old2_enumStatus    TYPE     �   CREATE TYPE public."old2_enumStatus" AS ENUM (
    'New',
    'Approved by Atasan',
    'Approved by HRD',
    'Approved by Finance',
    'Realisasi',
    'Realisasi-Aprroved',
    'Done',
    'Canceled',
    'Pelaksanaan'
);
 $   DROP TYPE public."old2_enumStatus";
       public          postgres    false            �           1247    24660    old_enumStatus    TYPE     �   CREATE TYPE public."old_enumStatus" AS ENUM (
    'On Proses',
    'Atasan',
    'HRD',
    'Finance',
    'Pelaksanaan',
    'Realisasi',
    'Finalisasi',
    'Done',
    'Batalkan'
);
 #   DROP TYPE public."old_enumStatus";
       public          postgres    false            �            1259    24763    app_approval    TABLE       CREATE TABLE public.app_approval (
    n_approval_id bigint NOT NULL,
    c_type character varying(50) NOT NULL,
    c_type_id character varying(32) NOT NULL,
    n_act_by integer,
    c_act_name character varying(100),
    d_act_date timestamp without time zone,
    c_act_reason character varying(500),
    c_act_note text,
    c_act_status character varying(50),
    n_created_by integer,
    d_created_date timestamp without time zone DEFAULT now(),
    n_updated_by integer,
    d_updated_date timestamp without time zone
);
     DROP TABLE public.app_approval;
       public         heap    postgres    false            �            1259    24769    app_approval_n_approval_id_seq    SEQUENCE     �   CREATE SEQUENCE public.app_approval_n_approval_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.app_approval_n_approval_id_seq;
       public          postgres    false    227            �           0    0    app_approval_n_approval_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.app_approval_n_approval_id_seq OWNED BY public.app_approval.n_approval_id;
          public          postgres    false    228            �            1259    24684    old_spd_main_status    TABLE     |   CREATE TABLE public.old_spd_main_status (
    n_spd_status_id integer NOT NULL,
    e_spd_status public."old_enumStatus"
);
 '   DROP TABLE public.old_spd_main_status;
       public         heap    postgres    false    908            �            1259    24806    old_spd_pelaksanaan    TABLE     �  CREATE TABLE public.old_spd_pelaksanaan (
    n_pelaksanaan_id integer NOT NULL,
    n_spd_id integer,
    d_pelaksanaan_tanggal date,
    c_pelaksanaan_aktifitas character varying(255),
    c_pelaksanaan_keterangan character varying(255),
    n_realisasi_id integer,
    c_pelaksanaan_attachment character varying(255),
    n_spd_jenisbiaya_id integer,
    n_pelaksanaan_nominal double precision
);
 '   DROP TABLE public.old_spd_pelaksanaan;
       public         heap    postgres    false            �            1259    24818    old_spd_realisasi    TABLE     �  CREATE TABLE public.old_spd_realisasi (
    n_realisasi_id integer NOT NULL,
    d_realisasi_tanggal date,
    n_realisasi_uangsaku double precision,
    n_realisasi_biayapenginapan double precision,
    n_realisasi_biayatransportasi double precision,
    n_realisasi_biayalain double precision,
    n_realisasi_totalbiaya double precision,
    n_realisasi_hrd_uangsaku double precision,
    n_realisasi_hrd_biayapenginapan double precision,
    n_realisasi_hrd_biayatransportasi double precision,
    n_realisasi_hrd_biayalain double precision,
    n_realisasi_hrd_totalbiaya double precision,
    n_spd_id integer NOT NULL,
    c_realisasi_keterangan character varying
);
 %   DROP TABLE public.old_spd_realisasi;
       public         heap    postgres    false            �            1259    24873    old_spd_realisasi_other    TABLE     �  CREATE TABLE public.old_spd_realisasi_other (
    n_realisasi_id integer NOT NULL,
    n_spd_id integer,
    d_realisasi_tanggal date,
    n_realisasi_uangsaku double precision,
    n_realisasi_biayapenginapan double precision,
    n_realisasi_biayatransportasi double precision,
    n_realisasi_biayalain double precision,
    n_realisasi_totalbiaya double precision,
    n_realisasi_hrd_uangsaku double precision,
    n_realisasi_hrd_biayapenginapan double precision,
    n_realisasi_hrd_biayatransportasi double precision,
    n_realisasi_hrd_biayalain double precision,
    n_realisasi_hrd_totalbiaya double precision,
    c_realisasi_keterangan character varying(255)
);
 +   DROP TABLE public.old_spd_realisasi_other;
       public         heap    postgres    false            �            1259    24700 
   spd_atasan    TABLE     �  CREATE TABLE public.spd_atasan (
    n_spdatasan_id integer NOT NULL,
    n_spd_id integer,
    c_spd_hashid character varying(255),
    c_spdatasan_nama character varying(255),
    d_spdatasan_respontanggal date,
    c_spdatasan_catatan character varying(255),
    c_spdatasan_tanda character varying(255),
    n_spdatasan_jenis_id integer,
    n_spdatasan_respon_id integer,
    c_spdatasan_nik character varying(255)
);
    DROP TABLE public.spd_atasan;
       public         heap    postgres    false            �            1259    24723    spd_atasan_jenis    TABLE     �   CREATE TABLE public.spd_atasan_jenis (
    n_spdatasan_jenis_id integer NOT NULL,
    e_spdatasan_jenis public."enumAtasanJenis"
);
 $   DROP TABLE public.spd_atasan_jenis;
       public         heap    postgres    false    919            �            1259    24699    spd_atasan_n_spdatasan_id_seq    SEQUENCE     �   ALTER TABLE public.spd_atasan ALTER COLUMN n_spdatasan_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.spd_atasan_n_spdatasan_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    224            �            1259    24731    spd_atasan_respon    TABLE     �   CREATE TABLE public.spd_atasan_respon (
    n_spdatasan_respon_id integer NOT NULL,
    e_spdatasan_respon public."enumAtasanRespon"
);
 %   DROP TABLE public.spd_atasan_respon;
       public         heap    postgres    false    916            �            1259    16449    spd_main    TABLE     X  CREATE TABLE public.spd_main (
    n_spd_id integer NOT NULL,
    c_spd_hashid character varying(255),
    c_spd_nomorsurat character varying(255),
    c_spd_nama character varying(255),
    c_spd_nik character varying(255),
    c_spd_unit character varying(255),
    c_spd_costcenterkaryawan character varying(255),
    c_spd_jabatan character varying(255),
    c_spd_nohp character varying(255),
    c_spd_pangkat character varying(255),
    c_spd_grade character varying(255),
    c_spd_tempattujuan character varying(255),
    c_spd_costcenterpenanggung character varying(255),
    d_spd_tanggalberangkat date,
    d_spd_tanggalkembali date,
    c_spd_keterangandinas character varying(255),
    c_spd_keteranganakomodasi character varying(255),
    n_spd_uangsaku double precision,
    n_spd_biayapenginapan double precision,
    n_spd_biayatransport double precision,
    n_spd_biayalain character varying,
    n_spd_totalbiaya double precision,
    c_spd_banknama character varying(255),
    c_spd_banknorek character varying(255),
    c_spd_bankatasnama character varying,
    c_spd_atasannama character varying(255),
    c_spd_tempatdiajukan character varying(255),
    d_created_at timestamp without time zone DEFAULT now(),
    d_updated_at timestamp without time zone DEFAULT now(),
    d_spd_tanggalajukan date,
    c_spd_companynama character varying(255),
    n_spd_company_id integer,
    "n_spd_hrisId" integer,
    c_spd_keterangantransportasi character varying(255),
    n_spd_tujuandinas_id integer,
    n_spd_transportasi_id integer,
    n_spd_akomodasi_id integer,
    n_spd_uangmuka_id integer,
    n_spd_jenis_id integer,
    n_spd_status_id integer,
    "n_spd_atasan_hrisId" integer,
    "n_spd_atasan_userId" integer,
    "n_spd_userId" integer,
    "n_spd_hrdadh_userId" integer,
    c_spd_hrdadh_name character varying,
    "n_spd_gradeId" integer
);
    DROP TABLE public.spd_main;
       public         heap    app_dev    false            �           0    0 $   COLUMN spd_main.n_spd_tujuandinas_id    COMMENT     �   COMMENT ON COLUMN public.spd_main.n_spd_tujuandinas_id IS '    "1" => "Training TTC/Main Dealer",
    "2" => "Training/Workshop/Seminar Lainnya",
    "3" => "Lainnya Wilayan Non IBT",
    "4" => "Lainnya Wilayah IBT"';
          public          app_dev    false    216            �           0    0 %   COLUMN spd_main.n_spd_transportasi_id    COMMENT     �   COMMENT ON COLUMN public.spd_main.n_spd_transportasi_id IS '    "1" => "Pesawat Udara",
    "2" => "Kendaraan Dinas Operasional",
    "3" => "Kereta Api",
    "4" => "Lainnya"';
          public          app_dev    false    216            �           0    0 "   COLUMN spd_main.n_spd_akomodasi_id    COMMENT     �   COMMENT ON COLUMN public.spd_main.n_spd_akomodasi_id IS '    "1" => "Hotel",
    "2" => "Rumah Kerabat/ Keluarga",
    "3" => "Lainnya"';
          public          app_dev    false    216            �           0    0 !   COLUMN spd_main.n_spd_uangmuka_id    COMMENT     c   COMMENT ON COLUMN public.spd_main.n_spd_uangmuka_id IS '    "1" => "Tidak Ada",
    "2" => "Ada"';
          public          app_dev    false    216            �           0    0    COLUMN spd_main.n_spd_jenis_id    COMMENT     g   COMMENT ON COLUMN public.spd_main.n_spd_jenis_id IS '"1" => "Perjalanan Dinas",
"2" => "Penempatan",';
          public          app_dev    false    216            �           0    0    COLUMN spd_main.n_spd_status_id    COMMENT     �   COMMENT ON COLUMN public.spd_main.n_spd_status_id IS '"1" => "On Proses",
"2" => "Atasan",
"3" => "HRD",
"4" => "Finance",
"5" => "Pelaksanaan",
"6" => "Realisasi",
"7" => "Finalisasi",
"8" => "Done",
"9" => "Batalkan",';
          public          app_dev    false    216            �            1259    24643    spd_main_akomodasi    TABLE     �   CREATE TABLE public.spd_main_akomodasi (
    n_spd_akomodasi_id integer NOT NULL,
    e_spd_akomodasi public."enumAkomodasi"
);
 &   DROP TABLE public.spd_main_akomodasi;
       public         heap    postgres    false    883            �            1259    24679    spd_main_jenis    TABLE     p   CREATE TABLE public.spd_main_jenis (
    n_spd_jenis_id integer NOT NULL,
    e_spd_jenis public."enumJenis"
);
 "   DROP TABLE public.spd_main_jenis;
       public         heap    postgres    false    895            �            1259    24857    spd_main_jenisbiaya    TABLE     �   CREATE TABLE public.spd_main_jenisbiaya (
    n_spd_jenisbiaya_id integer NOT NULL,
    e_spd_jenisbiaya public."enumJenisBiaya"
);
 '   DROP TABLE public.spd_main_jenisbiaya;
       public         heap    postgres    false    928            �            1259    24801    spd_main_status    TABLE     w   CREATE TABLE public.spd_main_status (
    n_spd_status_id integer NOT NULL,
    e_spd_status character varying(255)
);
 #   DROP TABLE public.spd_main_status;
       public         heap    postgres    false            �            1259    16448    spd_main_test_n_spd_id_seq    SEQUENCE     �   ALTER TABLE public.spd_main ALTER COLUMN n_spd_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.spd_main_test_n_spd_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          app_dev    false    216            �            1259    24624    spd_main_transportasi    TABLE     �   CREATE TABLE public.spd_main_transportasi (
    n_spd_transportasi_id integer NOT NULL,
    e_spd_transportasi public."enumTransportasi"
);
 )   DROP TABLE public.spd_main_transportasi;
       public         heap    postgres    false    871            �            1259    24612    spd_main_tujuandinas    TABLE     �   CREATE TABLE public.spd_main_tujuandinas (
    n_spd_tujuandinas_id integer NOT NULL,
    e_spd_tujuandinas public."enumTujuanDinas"
);
 (   DROP TABLE public.spd_main_tujuandinas;
       public         heap    postgres    false    874            �            1259    24648    spd_main_uangmuka    TABLE     |   CREATE TABLE public.spd_main_uangmuka (
    n_spd_uangmuka_id integer NOT NULL,
    e_spd_uangmuka public."enumUangMuka"
);
 %   DROP TABLE public.spd_main_uangmuka;
       public         heap    postgres    false    886            �            1259    24865    spd_pelaksanaan    TABLE     e  CREATE TABLE public.spd_pelaksanaan (
    n_pelaksanaan_id integer NOT NULL,
    n_spd_id integer NOT NULL,
    d_pelaksanaan_tanggal date,
    c_pelaksanaan_aktifitas character varying,
    c_pelaksanaan_keterangan character varying,
    d_created_at timestamp without time zone DEFAULT now(),
    d_updated_at timestamp without time zone DEFAULT now()
);
 #   DROP TABLE public.spd_pelaksanaan;
       public         heap    postgres    false            �            1259    24841 $   spd_pelaksanaan_n_pelaksanaan_id_seq    SEQUENCE     �   ALTER TABLE public.old_spd_pelaksanaan ALTER COLUMN n_pelaksanaan_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.spd_pelaksanaan_n_pelaksanaan_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    230            �            1259    24914 %   spd_pelaksanaan_n_pelaksanaan_id_seq1    SEQUENCE     �   ALTER TABLE public.spd_pelaksanaan ALTER COLUMN n_pelaksanaan_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.spd_pelaksanaan_n_pelaksanaan_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    235            �            1259    24879    spd_realisasi    TABLE     �  CREATE TABLE public.spd_realisasi (
    n_realisasi_id integer NOT NULL,
    n_spd_id integer NOT NULL,
    n_realisasi_uangsaku double precision,
    c_realisasi_uangsaku_ket character varying,
    n_realisasi_biayapenginapan double precision,
    c_realisasi_biayapenginapan_ket character varying,
    n_realisasi_biayatransport double precision,
    c_realisasi_biayatransport_ket character varying,
    n_realisasi_biayalain double precision,
    c_realisasi_biayalain_ket character varying,
    d_realisasi_tanggal date,
    n_realisasi_subtotal double precision,
    d_created_at timestamp without time zone DEFAULT now(),
    d_updated_at timestamp without time zone DEFAULT now()
);
 !   DROP TABLE public.spd_realisasi;
       public         heap    postgres    false            �            1259    24886    spd_realisasi_detail    TABLE     H  CREATE TABLE public.spd_realisasi_detail (
    n_rdetail_id integer NOT NULL,
    n_spd_id integer NOT NULL,
    n_rdetail_uangsaku_total double precision,
    n_rdetail_biayapenginapan_total double precision,
    n_rdetail_biayatransport_total double precision,
    n_rdetail_biayalain_total double precision,
    n_rdetail_totalrealisasi double precision,
    n_rdetail_uangmuka double precision,
    n_rdetail_selisih double precision,
    n_rket_id integer,
    d_created_at timestamp without time zone DEFAULT now(),
    d_updated_at timestamp without time zone DEFAULT now()
);
 (   DROP TABLE public.spd_realisasi_detail;
       public         heap    postgres    false            �            1259    24916 %   spd_realisasi_detail_n_rdetail_id_seq    SEQUENCE     �   ALTER TABLE public.spd_realisasi_detail ALTER COLUMN n_rdetail_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.spd_realisasi_detail_n_rdetail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    239            �            1259    24909    spd_realisasi_ket_jenis    TABLE     �   CREATE TABLE public.spd_realisasi_ket_jenis (
    n_rket_id integer NOT NULL,
    e_rket_jenis public."enumRealisasiKetJenis",
    c_rket_ket character varying
);
 +   DROP TABLE public.spd_realisasi_ket_jenis;
       public         heap    postgres    false    955            �            1259    24835     spd_realisasi_n_realisasi_id_seq    SEQUENCE     �   ALTER TABLE public.old_spd_realisasi ALTER COLUMN n_realisasi_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.spd_realisasi_n_realisasi_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    231            �            1259    24872 !   spd_realisasi_n_realisasi_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.spd_realisasi_n_realisasi_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.spd_realisasi_n_realisasi_id_seq1;
       public          postgres    false    237            �           0    0 !   spd_realisasi_n_realisasi_id_seq1    SEQUENCE OWNED BY     p   ALTER SEQUENCE public.spd_realisasi_n_realisasi_id_seq1 OWNED BY public.old_spd_realisasi_other.n_realisasi_id;
          public          postgres    false    236            �            1259    24915 !   spd_realisasi_n_realisasi_id_seq2    SEQUENCE     �   ALTER TABLE public.spd_realisasi ALTER COLUMN n_realisasi_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.spd_realisasi_n_realisasi_id_seq2
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    238            �            1259    24893    spd_realisasi_persetujuan    TABLE     �  CREATE TABLE public.spd_realisasi_persetujuan (
    n_rpersetujuan_id integer NOT NULL,
    n_spd_id integer NOT NULL,
    n_rpersetujuan_uangsaku_total double precision,
    n_rpersetujuan_biayapenginapan_total double precision,
    n_rpersetujuan_biayatransport_total double precision,
    n_rpersetujuan_biayalain_total double precision,
    n_rpersetujuan_totalrealisasi double precision,
    n_rpersetujuan_uangmuka double precision,
    n_rpersetujuan_selisih double precision,
    n_rket_id integer,
    c_rpersetujuan_norek character varying,
    d_created_at timestamp without time zone DEFAULT now(),
    d_updated_at timestamp without time zone DEFAULT now()
);
 -   DROP TABLE public.spd_realisasi_persetujuan;
       public         heap    postgres    false            �            1259    24918 /   spd_realisasi_persetujuan_n_rpersetujuan_id_seq    SEQUENCE       ALTER TABLE public.spd_realisasi_persetujuan ALTER COLUMN n_rpersetujuan_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.spd_realisasi_persetujuan_n_rpersetujuan_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    240            �           2604    24770    app_approval n_approval_id    DEFAULT     �   ALTER TABLE ONLY public.app_approval ALTER COLUMN n_approval_id SET DEFAULT nextval('public.app_approval_n_approval_id_seq'::regclass);
 I   ALTER TABLE public.app_approval ALTER COLUMN n_approval_id DROP DEFAULT;
       public          postgres    false    228    227            �           2604    24876 &   old_spd_realisasi_other n_realisasi_id    DEFAULT     �   ALTER TABLE ONLY public.old_spd_realisasi_other ALTER COLUMN n_realisasi_id SET DEFAULT nextval('public.spd_realisasi_n_realisasi_id_seq1'::regclass);
 U   ALTER TABLE public.old_spd_realisasi_other ALTER COLUMN n_realisasi_id DROP DEFAULT;
       public          postgres    false    236    237    237            �          0    24763    app_approval 
   TABLE DATA           �   COPY public.app_approval (n_approval_id, c_type, c_type_id, n_act_by, c_act_name, d_act_date, c_act_reason, c_act_note, c_act_status, n_created_by, d_created_date, n_updated_by, d_updated_date) FROM stdin;
    public          postgres    false    227   ѳ       �          0    24684    old_spd_main_status 
   TABLE DATA           L   COPY public.old_spd_main_status (n_spd_status_id, e_spd_status) FROM stdin;
    public          postgres    false    222   Ե       �          0    24806    old_spd_pelaksanaan 
   TABLE DATA           �   COPY public.old_spd_pelaksanaan (n_pelaksanaan_id, n_spd_id, d_pelaksanaan_tanggal, c_pelaksanaan_aktifitas, c_pelaksanaan_keterangan, n_realisasi_id, c_pelaksanaan_attachment, n_spd_jenisbiaya_id, n_pelaksanaan_nominal) FROM stdin;
    public          postgres    false    230   C�       �          0    24818    old_spd_realisasi 
   TABLE DATA           �  COPY public.old_spd_realisasi (n_realisasi_id, d_realisasi_tanggal, n_realisasi_uangsaku, n_realisasi_biayapenginapan, n_realisasi_biayatransportasi, n_realisasi_biayalain, n_realisasi_totalbiaya, n_realisasi_hrd_uangsaku, n_realisasi_hrd_biayapenginapan, n_realisasi_hrd_biayatransportasi, n_realisasi_hrd_biayalain, n_realisasi_hrd_totalbiaya, n_spd_id, c_realisasi_keterangan) FROM stdin;
    public          postgres    false    231   ��       �          0    24873    old_spd_realisasi_other 
   TABLE DATA           �  COPY public.old_spd_realisasi_other (n_realisasi_id, n_spd_id, d_realisasi_tanggal, n_realisasi_uangsaku, n_realisasi_biayapenginapan, n_realisasi_biayatransportasi, n_realisasi_biayalain, n_realisasi_totalbiaya, n_realisasi_hrd_uangsaku, n_realisasi_hrd_biayapenginapan, n_realisasi_hrd_biayatransportasi, n_realisasi_hrd_biayalain, n_realisasi_hrd_totalbiaya, c_realisasi_keterangan) FROM stdin;
    public          postgres    false    237   E�       �          0    24700 
   spd_atasan 
   TABLE DATA           �   COPY public.spd_atasan (n_spdatasan_id, n_spd_id, c_spd_hashid, c_spdatasan_nama, d_spdatasan_respontanggal, c_spdatasan_catatan, c_spdatasan_tanda, n_spdatasan_jenis_id, n_spdatasan_respon_id, c_spdatasan_nik) FROM stdin;
    public          postgres    false    224   b�       �          0    24723    spd_atasan_jenis 
   TABLE DATA           S   COPY public.spd_atasan_jenis (n_spdatasan_jenis_id, e_spdatasan_jenis) FROM stdin;
    public          postgres    false    225   �       �          0    24731    spd_atasan_respon 
   TABLE DATA           V   COPY public.spd_atasan_respon (n_spdatasan_respon_id, e_spdatasan_respon) FROM stdin;
    public          postgres    false    226   ��       �          0    16449    spd_main 
   TABLE DATA             COPY public.spd_main (n_spd_id, c_spd_hashid, c_spd_nomorsurat, c_spd_nama, c_spd_nik, c_spd_unit, c_spd_costcenterkaryawan, c_spd_jabatan, c_spd_nohp, c_spd_pangkat, c_spd_grade, c_spd_tempattujuan, c_spd_costcenterpenanggung, d_spd_tanggalberangkat, d_spd_tanggalkembali, c_spd_keterangandinas, c_spd_keteranganakomodasi, n_spd_uangsaku, n_spd_biayapenginapan, n_spd_biayatransport, n_spd_biayalain, n_spd_totalbiaya, c_spd_banknama, c_spd_banknorek, c_spd_bankatasnama, c_spd_atasannama, c_spd_tempatdiajukan, d_created_at, d_updated_at, d_spd_tanggalajukan, c_spd_companynama, n_spd_company_id, "n_spd_hrisId", c_spd_keterangantransportasi, n_spd_tujuandinas_id, n_spd_transportasi_id, n_spd_akomodasi_id, n_spd_uangmuka_id, n_spd_jenis_id, n_spd_status_id, "n_spd_atasan_hrisId", "n_spd_atasan_userId", "n_spd_userId", "n_spd_hrdadh_userId", c_spd_hrdadh_name, "n_spd_gradeId") FROM stdin;
    public          app_dev    false    216   �       �          0    24643    spd_main_akomodasi 
   TABLE DATA           Q   COPY public.spd_main_akomodasi (n_spd_akomodasi_id, e_spd_akomodasi) FROM stdin;
    public          postgres    false    219    �       �          0    24679    spd_main_jenis 
   TABLE DATA           E   COPY public.spd_main_jenis (n_spd_jenis_id, e_spd_jenis) FROM stdin;
    public          postgres    false    221   g�       �          0    24857    spd_main_jenisbiaya 
   TABLE DATA           T   COPY public.spd_main_jenisbiaya (n_spd_jenisbiaya_id, e_spd_jenisbiaya) FROM stdin;
    public          postgres    false    234   ��       �          0    24801    spd_main_status 
   TABLE DATA           H   COPY public.spd_main_status (n_spd_status_id, e_spd_status) FROM stdin;
    public          postgres    false    229   ��       �          0    24624    spd_main_transportasi 
   TABLE DATA           Z   COPY public.spd_main_transportasi (n_spd_transportasi_id, e_spd_transportasi) FROM stdin;
    public          postgres    false    218   ��       �          0    24612    spd_main_tujuandinas 
   TABLE DATA           W   COPY public.spd_main_tujuandinas (n_spd_tujuandinas_id, e_spd_tujuandinas) FROM stdin;
    public          postgres    false    217   ��       �          0    24648    spd_main_uangmuka 
   TABLE DATA           N   COPY public.spd_main_uangmuka (n_spd_uangmuka_id, e_spd_uangmuka) FROM stdin;
    public          postgres    false    220   S�       �          0    24865    spd_pelaksanaan 
   TABLE DATA           �   COPY public.spd_pelaksanaan (n_pelaksanaan_id, n_spd_id, d_pelaksanaan_tanggal, c_pelaksanaan_aktifitas, c_pelaksanaan_keterangan, d_created_at, d_updated_at) FROM stdin;
    public          postgres    false    235   �       �          0    24879    spd_realisasi 
   TABLE DATA           d  COPY public.spd_realisasi (n_realisasi_id, n_spd_id, n_realisasi_uangsaku, c_realisasi_uangsaku_ket, n_realisasi_biayapenginapan, c_realisasi_biayapenginapan_ket, n_realisasi_biayatransport, c_realisasi_biayatransport_ket, n_realisasi_biayalain, c_realisasi_biayalain_ket, d_realisasi_tanggal, n_realisasi_subtotal, d_created_at, d_updated_at) FROM stdin;
    public          postgres    false    238   ��       �          0    24886    spd_realisasi_detail 
   TABLE DATA           $  COPY public.spd_realisasi_detail (n_rdetail_id, n_spd_id, n_rdetail_uangsaku_total, n_rdetail_biayapenginapan_total, n_rdetail_biayatransport_total, n_rdetail_biayalain_total, n_rdetail_totalrealisasi, n_rdetail_uangmuka, n_rdetail_selisih, n_rket_id, d_created_at, d_updated_at) FROM stdin;
    public          postgres    false    239   ��       �          0    24909    spd_realisasi_ket_jenis 
   TABLE DATA           V   COPY public.spd_realisasi_ket_jenis (n_rket_id, e_rket_jenis, c_rket_ket) FROM stdin;
    public          postgres    false    241   ��       �          0    24893    spd_realisasi_persetujuan 
   TABLE DATA           g  COPY public.spd_realisasi_persetujuan (n_rpersetujuan_id, n_spd_id, n_rpersetujuan_uangsaku_total, n_rpersetujuan_biayapenginapan_total, n_rpersetujuan_biayatransport_total, n_rpersetujuan_biayalain_total, n_rpersetujuan_totalrealisasi, n_rpersetujuan_uangmuka, n_rpersetujuan_selisih, n_rket_id, c_rpersetujuan_norek, d_created_at, d_updated_at) FROM stdin;
    public          postgres    false    240   #�       �           0    0    app_approval_n_approval_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.app_approval_n_approval_id_seq', 11, true);
          public          postgres    false    228            �           0    0    spd_atasan_n_spdatasan_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.spd_atasan_n_spdatasan_id_seq', 1, false);
          public          postgres    false    223            �           0    0    spd_main_test_n_spd_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.spd_main_test_n_spd_id_seq', 179, true);
          public          app_dev    false    215            �           0    0 $   spd_pelaksanaan_n_pelaksanaan_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.spd_pelaksanaan_n_pelaksanaan_id_seq', 44, true);
          public          postgres    false    233            �           0    0 %   spd_pelaksanaan_n_pelaksanaan_id_seq1    SEQUENCE SET     T   SELECT pg_catalog.setval('public.spd_pelaksanaan_n_pelaksanaan_id_seq1', 97, true);
          public          postgres    false    242            �           0    0 %   spd_realisasi_detail_n_rdetail_id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public.spd_realisasi_detail_n_rdetail_id_seq', 38, true);
          public          postgres    false    244            �           0    0     spd_realisasi_n_realisasi_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.spd_realisasi_n_realisasi_id_seq', 10, true);
          public          postgres    false    232            �           0    0 !   spd_realisasi_n_realisasi_id_seq1    SEQUENCE SET     P   SELECT pg_catalog.setval('public.spd_realisasi_n_realisasi_id_seq1', 1, false);
          public          postgres    false    236            �           0    0 !   spd_realisasi_n_realisasi_id_seq2    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.spd_realisasi_n_realisasi_id_seq2', 139, true);
          public          postgres    false    243            �           0    0 /   spd_realisasi_persetujuan_n_rpersetujuan_id_seq    SEQUENCE SET     ^   SELECT pg_catalog.setval('public.spd_realisasi_persetujuan_n_rpersetujuan_id_seq', 34, true);
          public          postgres    false    245                       2606    24772    app_approval app_approval_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.app_approval
    ADD CONSTRAINT app_approval_pkey PRIMARY KEY (n_approval_id);
 H   ALTER TABLE ONLY public.app_approval DROP CONSTRAINT app_approval_pkey;
       public            postgres    false    227                       2606    24729 &   spd_atasan_jenis spd_atasan_jenis_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.spd_atasan_jenis
    ADD CONSTRAINT spd_atasan_jenis_pkey PRIMARY KEY (n_spdatasan_jenis_id);
 P   ALTER TABLE ONLY public.spd_atasan_jenis DROP CONSTRAINT spd_atasan_jenis_pkey;
       public            postgres    false    225            �           2606    24706    spd_atasan spd_atasan_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.spd_atasan
    ADD CONSTRAINT spd_atasan_pkey PRIMARY KEY (n_spdatasan_id);
 D   ALTER TABLE ONLY public.spd_atasan DROP CONSTRAINT spd_atasan_pkey;
       public            postgres    false    224                       2606    24762 (   spd_atasan_respon spd_atasan_respon_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public.spd_atasan_respon
    ADD CONSTRAINT spd_atasan_respon_pkey PRIMARY KEY (n_spdatasan_respon_id);
 R   ALTER TABLE ONLY public.spd_atasan_respon DROP CONSTRAINT spd_atasan_respon_pkey;
       public            postgres    false    226            �           2606    24647 *   spd_main_akomodasi spd_main_akomodasi_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.spd_main_akomodasi
    ADD CONSTRAINT spd_main_akomodasi_pkey PRIMARY KEY (n_spd_akomodasi_id);
 T   ALTER TABLE ONLY public.spd_main_akomodasi DROP CONSTRAINT spd_main_akomodasi_pkey;
       public            postgres    false    219            �           2606    24683 "   spd_main_jenis spd_main_jenis_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.spd_main_jenis
    ADD CONSTRAINT spd_main_jenis_pkey PRIMARY KEY (n_spd_jenis_id);
 L   ALTER TABLE ONLY public.spd_main_jenis DROP CONSTRAINT spd_main_jenis_pkey;
       public            postgres    false    221                       2606    24861 ,   spd_main_jenisbiaya spd_main_jenisbiaya_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public.spd_main_jenisbiaya
    ADD CONSTRAINT spd_main_jenisbiaya_pkey PRIMARY KEY (n_spd_jenisbiaya_id);
 V   ALTER TABLE ONLY public.spd_main_jenisbiaya DROP CONSTRAINT spd_main_jenisbiaya_pkey;
       public            postgres    false    234            �           2606    16455    spd_main spd_main_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.spd_main
    ADD CONSTRAINT spd_main_pkey PRIMARY KEY (n_spd_id);
 @   ALTER TABLE ONLY public.spd_main DROP CONSTRAINT spd_main_pkey;
       public            app_dev    false    216            �           2606    24688 (   old_spd_main_status spd_main_status_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY public.old_spd_main_status
    ADD CONSTRAINT spd_main_status_pkey PRIMARY KEY (n_spd_status_id);
 R   ALTER TABLE ONLY public.old_spd_main_status DROP CONSTRAINT spd_main_status_pkey;
       public            postgres    false    222                       2606    24805 %   spd_main_status spd_main_status_pkey1 
   CONSTRAINT     p   ALTER TABLE ONLY public.spd_main_status
    ADD CONSTRAINT spd_main_status_pkey1 PRIMARY KEY (n_spd_status_id);
 O   ALTER TABLE ONLY public.spd_main_status DROP CONSTRAINT spd_main_status_pkey1;
       public            postgres    false    229            �           2606    24628 0   spd_main_transportasi spd_main_transportasi_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.spd_main_transportasi
    ADD CONSTRAINT spd_main_transportasi_pkey PRIMARY KEY (n_spd_transportasi_id);
 Z   ALTER TABLE ONLY public.spd_main_transportasi DROP CONSTRAINT spd_main_transportasi_pkey;
       public            postgres    false    218            �           2606    24618 .   spd_main_tujuandinas spd_main_tujuandinas_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.spd_main_tujuandinas
    ADD CONSTRAINT spd_main_tujuandinas_pkey PRIMARY KEY (n_spd_tujuandinas_id);
 X   ALTER TABLE ONLY public.spd_main_tujuandinas DROP CONSTRAINT spd_main_tujuandinas_pkey;
       public            postgres    false    217            �           2606    24652 (   spd_main_uangmuka spd_main_uangmuka_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.spd_main_uangmuka
    ADD CONSTRAINT spd_main_uangmuka_pkey PRIMARY KEY (n_spd_uangmuka_id);
 R   ALTER TABLE ONLY public.spd_main_uangmuka DROP CONSTRAINT spd_main_uangmuka_pkey;
       public            postgres    false    220            	           2606    24812 (   old_spd_pelaksanaan spd_pelaksanaan_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.old_spd_pelaksanaan
    ADD CONSTRAINT spd_pelaksanaan_pkey PRIMARY KEY (n_pelaksanaan_id);
 R   ALTER TABLE ONLY public.old_spd_pelaksanaan DROP CONSTRAINT spd_pelaksanaan_pkey;
       public            postgres    false    230                       2606    24871 %   spd_pelaksanaan spd_pelaksanaan_pkey1 
   CONSTRAINT     q   ALTER TABLE ONLY public.spd_pelaksanaan
    ADD CONSTRAINT spd_pelaksanaan_pkey1 PRIMARY KEY (n_pelaksanaan_id);
 O   ALTER TABLE ONLY public.spd_pelaksanaan DROP CONSTRAINT spd_pelaksanaan_pkey1;
       public            postgres    false    235                       2606    24892 .   spd_realisasi_detail spd_realisasi_detail_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.spd_realisasi_detail
    ADD CONSTRAINT spd_realisasi_detail_pkey PRIMARY KEY (n_rdetail_id);
 X   ALTER TABLE ONLY public.spd_realisasi_detail DROP CONSTRAINT spd_realisasi_detail_pkey;
       public            postgres    false    239                       2606    24920 4   spd_realisasi_ket_jenis spd_realisasi_ket_jenis_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public.spd_realisasi_ket_jenis
    ADD CONSTRAINT spd_realisasi_ket_jenis_pkey PRIMARY KEY (n_rket_id);
 ^   ALTER TABLE ONLY public.spd_realisasi_ket_jenis DROP CONSTRAINT spd_realisasi_ket_jenis_pkey;
       public            postgres    false    241                       2606    24899 8   spd_realisasi_persetujuan spd_realisasi_persetujuan_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.spd_realisasi_persetujuan
    ADD CONSTRAINT spd_realisasi_persetujuan_pkey PRIMARY KEY (n_rpersetujuan_id);
 b   ALTER TABLE ONLY public.spd_realisasi_persetujuan DROP CONSTRAINT spd_realisasi_persetujuan_pkey;
       public            postgres    false    240                       2606    24824 $   old_spd_realisasi spd_realisasi_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.old_spd_realisasi
    ADD CONSTRAINT spd_realisasi_pkey PRIMARY KEY (n_realisasi_id);
 N   ALTER TABLE ONLY public.old_spd_realisasi DROP CONSTRAINT spd_realisasi_pkey;
       public            postgres    false    231                       2606    24878 +   old_spd_realisasi_other spd_realisasi_pkey1 
   CONSTRAINT     u   ALTER TABLE ONLY public.old_spd_realisasi_other
    ADD CONSTRAINT spd_realisasi_pkey1 PRIMARY KEY (n_realisasi_id);
 U   ALTER TABLE ONLY public.old_spd_realisasi_other DROP CONSTRAINT spd_realisasi_pkey1;
       public            postgres    false    237                       2606    24885 !   spd_realisasi spd_realisasi_pkey2 
   CONSTRAINT     k   ALTER TABLE ONLY public.spd_realisasi
    ADD CONSTRAINT spd_realisasi_pkey2 PRIMARY KEY (n_realisasi_id);
 K   ALTER TABLE ONLY public.spd_realisasi DROP CONSTRAINT spd_realisasi_pkey2;
       public            postgres    false    238                       2606    24830 '   old_spd_pelaksanaan n_realisasi_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.old_spd_pelaksanaan
    ADD CONSTRAINT n_realisasi_id_fkey FOREIGN KEY (n_realisasi_id) REFERENCES public.old_spd_realisasi(n_realisasi_id) NOT VALID;
 Q   ALTER TABLE ONLY public.old_spd_pelaksanaan DROP CONSTRAINT n_realisasi_id_fkey;
       public          postgres    false    3339    231    230                        2606    24842 %   old_spd_realisasi n_realisasi_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.old_spd_realisasi
    ADD CONSTRAINT n_realisasi_id_fkey FOREIGN KEY (n_realisasi_id) REFERENCES public.old_spd_realisasi(n_realisasi_id) NOT VALID;
 O   ALTER TABLE ONLY public.old_spd_realisasi DROP CONSTRAINT n_realisasi_id_fkey;
       public          postgres    false    231    231    3339                       2606    24689    spd_main n_spd_akomodasi_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.spd_main
    ADD CONSTRAINT n_spd_akomodasi_fkey FOREIGN KEY (n_spd_akomodasi_id) REFERENCES public.spd_main_akomodasi(n_spd_akomodasi_id) NOT VALID;
 G   ALTER TABLE ONLY public.spd_main DROP CONSTRAINT n_spd_akomodasi_fkey;
       public          app_dev    false    219    3319    216                       2606    24813 !   old_spd_pelaksanaan n_spd_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.old_spd_pelaksanaan
    ADD CONSTRAINT n_spd_id_fkey FOREIGN KEY (n_spd_id) REFERENCES public.spd_main(n_spd_id) NOT VALID;
 K   ALTER TABLE ONLY public.old_spd_pelaksanaan DROP CONSTRAINT n_spd_id_fkey;
       public          postgres    false    230    216    3313            !           2606    24836    old_spd_realisasi n_spd_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.old_spd_realisasi
    ADD CONSTRAINT n_spd_id_fkey FOREIGN KEY (n_spd_id) REFERENCES public.spd_main(n_spd_id) NOT VALID;
 I   ALTER TABLE ONLY public.old_spd_realisasi DROP CONSTRAINT n_spd_id_fkey;
       public          postgres    false    231    216    3313                       2606    24694     spd_main n_spd_transportasi_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.spd_main
    ADD CONSTRAINT n_spd_transportasi_fkey FOREIGN KEY (n_spd_transportasi_id) REFERENCES public.spd_main_transportasi(n_spd_transportasi_id) NOT VALID;
 J   ALTER TABLE ONLY public.spd_main DROP CONSTRAINT n_spd_transportasi_fkey;
       public          app_dev    false    218    3317    216                       2606    24619    spd_main n_spd_tujuandinas_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.spd_main
    ADD CONSTRAINT n_spd_tujuandinas_fkey FOREIGN KEY (n_spd_tujuandinas_id) REFERENCES public.spd_main_tujuandinas(n_spd_tujuandinas_id) NOT VALID;
 I   ALTER TABLE ONLY public.spd_main DROP CONSTRAINT n_spd_tujuandinas_fkey;
       public          app_dev    false    3315    217    216                       2606    24773    spd_main n_spd_uangmuka_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.spd_main
    ADD CONSTRAINT n_spd_uangmuka_fkey FOREIGN KEY (n_spd_uangmuka_id) REFERENCES public.spd_main_uangmuka(n_spd_uangmuka_id) NOT VALID;
 F   ALTER TABLE ONLY public.spd_main DROP CONSTRAINT n_spd_uangmuka_fkey;
       public          app_dev    false    216    3321    220            �   �  x����n�0������{lO�hI۬vYh/*n��ؔ6H�\���l��
)�bs�̙����l�ޔ�e�e�1Œq:Y~��m��1o o4	P^�JZ��[-�tȒ�(���壳蕖dQY�쀸=VB�}>h��!!��r�k��#\s����cI�yU,�զ�ݺ�o��ɯ�����-y I1)���x�*ޚ [W��r����j[-e�*O�?&'L�:�Ehu����k�j��Ć�ƒ�������"C����D̰��(ϒA&&I��%�@��zp2BrβA�)���]%� ���p�:9j
��r:CX��Z�d �d����=U����T��"�7�D���'���Q_�#����x8�ӵ�!��nX|�%�y@�.
��4b�K�ʺX������lJ����s���iBN#d��h�X �)�P������y�F��Ŧ�+fE=/_.l�{YkH�~T:D>����`�      �   _   x���tJ,I��N���t��K�2�t��K��,N,��2�J��M9Rs�����M���S��9=�\��8K�r\���y
E�ũ�\1z\\\ �      �   6  x���Kj�@���)r��4�K���E�!�I�_ٱ�cJcl��/������^�MK0-Ѵ$ӒMK1-�l3�c������m0��6�E!�*!�(��rQ�z��͠h�ȃd�Z�"��#&v̉"�9��&2A6�����"	�.��=d](�
$](����j���G�6t+"m��=��T�`�A���x�;���s��>�����mx�W��9��cC$�P+C���Js�h*/Kj��:"2ȕ��ӁY�n��k�WoL�z��j�*sG��O�ع|x�e.]���S���_~�+���uܤq      �   �   x��Q]
�0~NN�M����'�c��D���,q�����/_R6lsC����_��۬�����OFu
j��he��z���ѝNs�È���r:Su��n��L�喀�y�E4�I&�=�^��
i�m������,���ܺ�����û�^��!�!�H�7��O�悈�}Q      �      x������ � �      �      x������ � �      �   %   x�3�JM��,N,��2�H�KO�*M������ ��h      �   =   x�3�t�LJ,I��N��2r�R�2�3���̒Ԣ��D.CN�Ԝ�\��\qA~W� g�      �      x��]�r�FҾ���/`d����;em�Q�q\����������%���oH� �)ٰE��0��yzF��I�o�}�1���Snק[:g����|����%�%��"e�H��������+G1y��8l�`z��t-�f��~����<��Ñh�7��F	hq�t�������St7i��:��Q����bq��P�,�De�������q��ձK�Zm�N!�����?]�I���D��9r�,���ArIݙ+f�ba�j.��	�#�Ĝ-3�%�$��r�t�e�ߥFH]���4b�t�H���]�H��%���l�t�@�5�/0�P
I%,��0ca����T�9IG�c6Ԃ�%���5��39F:�#�n���5#��]LY���8���D5F���l�ѕ�ٍy��@c�cƭ�:n���� �e0F:b���|��F�K��43;�R�t����~V�'M�%g5��Z�P��j��Y��+�/ѧZr�)G��HV�m_o��9� �%�Z"J�w�ұ*��;x�Y���f�t��E�Af5|r�|)8e_���X��U�Y��nij���mʑ��w����>�K\mɵ�P
q8�x$x|v�U>3%S� �{�!%�N����哺ܸf?����WgOΟ�����Oe͘Փ�����ˊ|=�
�0!���/�������W��m���ӌ��O~<{�2����P�r�*��\0b�O��B�#ѥ/~9{u������ϊp *6]BT�D`�qh��10 ��+x��䪶d7���]ҩ��WqX-�h4OԈ���i���CzJL�U�:��:�̓�.Y�<�,'�ܒ+��\-.޻��/_�]�~;?�������^=�����٫���J�b���������ߞ��ח�<}q�h	�tՏ9ߞng�+�6XX#�tR�u�/�髳/�.H�vEw��]_�S�]<}�8������n�@��K֖	�|�W=~-j{�}v�N0�j3'+�#�h�NZ�=f� �`��L3���}��D��N��C9٢be��2f-t)��V��s�8��_�Q,j$v�t2e���D��bT<#ˑo���r�Rb́Y���d�*�̛`�΂�x�	���8���<�|�\ܽha����֊��i����X���8r@�Ba�g�F奴)k�zy�������|��ܽ����E�Q�c�F�i�4�G����`�j)a���x`(8�Ÿ~����'���݋6|K����>Fa1Nc�|ˌ��2Ы6J���>���yy�k��Owg� niK߅2ZS��?v������?�:������05���'uo>��,�#�l峇�J*K��ɳ�(�r�2�섭v��t�Ξ��?�i�������k�Ο�*5@���"7�x��y�+����ٳgd��0@! �xV?R;�R���el��/d;�`b�I3���	���<��~�l���/^��^�2%��V(���r�
�[���g�,�����<^>�y�� 2�SFǅtXf�霘����uRE��]݊��m�l�}�A-����}J%�x-�N�)}��Z���}f��W�:h�T$y�|P*G���<8���`�Ș�4��k��t۴�n��Ѣ���nWH���'d\N#T#�R�?��#J�9i%:��$��B��Ř����X.9O�x�)[����ub_��4yQ#e�S�NZ;�4�C��P�,O
���\�!�mt%��C�P�˄�*�R2;�2
����VR����]�Ȩ*�g
h1N:2蒳�[+����Mn���z�Aұ�I�p�ݼ����#�ehp�tl����s���q;璐tU�Ѳ�c'���Y��{۞�ו}.;�fs�!8P�DYKa�mG�ҩ!���M|+�MG.R��(�e�ե5H:Z�U����W*���-�0�CK!�1�"�Ń�V_A�vo���zv��}i+ø=UM*�V�d�y�8��h�R�-��b�d�ƙ�Y�]����F�qґM�R��`@8�sR�D�L�sb�y�u�����|���6�f�S>����ꅧ���>
��/��dX��i��yy��lQ�f�����S �#���䳸�	�P�#�\�}�ă�?�VZQ��8�X�����jcu�}�H��@Μ�(k��h���H�Z�Y����%׵5�X1N:V(�C�"i�$��J�(z��D��3��z)^�lO6�=3��Bn����Է����_� �4��������'g�O�=K�W�t����%�_����a�b�V�����������V%3��(*������V9�e�V!��=���ϙ`�U�VD �J���^�������+[6��	��|�(���B� h+�Nb��%�,�N!P�*g]R����t�{;�x���JJ���ơZ�j*�(� �
�@L���}YE�}b��sv�6�n��n8����ɇ�����!~��[��I�hmX0Jĺ7�[�]T޲��0!d�'%-ec�!�8K��}�N�W�>y�9���ۉ	�{?��`�>X�Ģ���Vb�����	��b�*�0�d�Qy�����4!\���c��oe�	P�=U��t�����鉕e�Es�L#��TWS�s�xF '�,l�>Ù�.�hڞ��˅�.
U��oO�.�vc۝�0�Q���_�fy��в�g1N#�Fs��{��J;�R�9��Z&�@�!G��,m��ہw�ߨV��e'�5R"qiJT[~< ��4��E�$4xi"�Jm�%�$�B7k�J:;�=�o�=�z!$�ZjeZ�2��I ��U�AZ/1G�}��F�P7�$����l�!�b/e��̬�i����BE:��è�xL�`�yI2�t����9���=���������������
��}������Ҙ�&�H���Ep�8lt
�D�$��>R�,��9FI�<X���P�P�+W���R95�J��H�u:q"��C�g�A���	�
eG�����ݸ���[6ȝ@��P�ߩY�e�>s��$�i�caR�r�@<�d�1W<�u�%�!�N+���h��������1�v����m���oݽ!�����4jm�4j�����[���|Ԅ���y�Tf�\$��lA���V���{�~ҳ����;����P���4�a=vYe/<F�Fv&��p��r���"R�}�'No߹��as8��@�&N�w��L��%�ڲnmd�4���p�3Q9�)R��qʋ��$��3��'v.ݒ�z�n�!���3Q����N#V01����Ee��)�H���@���ؓ�<1���4�ŏ��O�k	{��U�����Շ7��t\��ޥ��0��� _����k���Fڇ��U9��Y�&ҳ:���Rgz)�eڡ�R�K������T���P��[5Sd E-�a�������:g�*�����v�B���
>�dsg��}rﾬ޾J�5����| �`q�0Fr#[g-�Jr�"Z��J�Ȕ��6A��4vb��i�?І�`ِ�ƪ5H9�4U�zF��RG��e�V�������D����� 5�L��v�9��mVֻn�����j��}j��\;���c3����?m�Y\�dg
��F:)qk�RWN�N.@�.�F�t�<Fwp�|6E�M�zA�]BSL��
1�49k멠��Ґ��^�2�<Z��	�	BJ�I���"˯��ooz�׬�=5[�#���㛿�*q��������'H��*���glV��<k���Fڧ��?�|��N)��M��F)WH�!c�+�3e���@0[d��	����1�����*"ض�m�6dRh[�R�Z-ZW�&�FL#�����:��"o�(�U9c4�gm��_���t6ua��H����W�����dz��J��@��_�^c�e�[2ͥ�F:\c�C�����=N�#a�k�tm����g:�����U�kn�|(_�Y�-�����}�f�0d'��F�P��<*��!P��P�� J����f�ϴ0��۲lj}�*�<�[�&��}g���^���g���&�M��rD 
  r���g)���Vʻ9������Z����G�fM��0�4.�m�Z�UIc�9*��EaJe�4�	�z��l�:����i5~k���~ݙ*]P��h���֚�Q��)�~Xy �aJ�)����� ��x��胩�\��p侵n8��;�Vhlm�2J�C��(�\O�|���a��E����1�>��շ �g�������֚C(c���)�AD^6a�3	�HwI: R��2se���l�]¨�S<2'� ������[�����SK��*�۝�c�}���$E(d1�אt.����t�I�Ug��>؊2?�I����݇7o����˵] �:�b���@EI@��h�����)U�/���DV�p��)��rhj�,_�Zv�m��Prpjez�eM���5re��{��(*a�⤉`dB�\��%2��|7���&M��D�?e����]��6�cn��5P��%0�B�����LT:BH�SP�}��`t
������ԯ��m{�ho��6�x�i��֮�;�j̀�i��k�d�/ݟTvI1�>cɗ�$���@g2�����l��[�=�W�����v�#�c3	S�lX*B�9�8�dS3D�E�qgS��a{�T��#�FC��|�,}/i?D0
�����)"a�
N�dJ�˹_e9��f���/��аe�*���O! YN�
FF���Bc=O��D�\�egv�������2�� �8�r�qq	k{�)�tj�Q&N��$G`�����ԏ=�|S0_      �   7   x�3��I��˫L�2�*�M�P�N-JLJ,�2rJ���9=�KRs�b���� ��      �   ,   x�3�H-�J�I�K�Sp��K,�2
��$�$�q��qqq �F      �   I   x�3�t�L�LT�I����\�P���ļ���.#�H@j^zf^bAb�!ghb^�Bpbv��ob6P$F��� �pJ      �   |   x�3�t,((�/KMQH�Tp��K�KN�2F�r�2Bq,I,N��2��K-�2�JM��,N,��2�H�I�J&��2��E��-pH��D�Cq�������K~^*��!�3��9�)\1z\\\ �nA�      �   N   x�3��I��˫L�2��N-J-ITp,��2r�R��\2���R��3��s�9R��KBAj�b���� t4      �   ]   x�3��I��˫LT��I�L�P�t
�2F�S����q��2����󋲋3��Ss3���z��jBB��}�l��Ĝ�"�=... �>%�      �      x�3�tLI�2��LI�V �c���� CgK      �   *  x��]M��6=K��_�*~��fk]I.�ޜ����	2 (E�~��Cة��8#��<�D�@���S7 ��*_%Q���b���L���:.�&1��m�o�z�eUY�/�����٦vSwj$��}�ѯ����X=ߺ�_��+WU��<�V?�������pE���Jک�D�_5�D%����%�:2Ŵ��E;)-��l�H�1&�OU�@�Χ�]���LBǢa�v�G�z �#�M��I1 �0�%�u�j�c�U����u�%\C5����jd����!ﵵPM���p�`�����aBO�3�b7iB;5X�:FG4�:�h9�,}�@��������+�9Rq`�����8uTre����E�ȅ��(�����LKx��:2�i�o�,]>R���m��C	4b��f[�NzɈ����^T�^�H������^�K��#�N��A��O/@"��Y0�(CI7�k��8�ؒ=m �#߁��.�����(�Z��m���3��k�La46s��,�7}G�ä7�!�������`�5��HS됷�|�2���i7�c>�L82i<��0���О[��fߑI���Z��̓!����K:~Z��{q0�ِ���>�0Y��Fڜv����g-׃4�^�挏��1.��=�:�kYg'�L J��9�� ɛΞ�ͩof,����x�1�t�8�0AM��Ih��=L�ä�"螂;��"wB�� 螂�8��!wB�� 螂�:��#wB�� 螂�9�Q wB�� 螂�;�Q"wB�� 螂Q��h������P����yj`P��M�ϳ����xtނ2���� ���gFԴ�C�0�������g���!���8��$8H�ˆ��<]�*�ߵ�xsC�����㇣�:ڱ���1eC��	PҎ�04-e�%��'�x���ɵ3VK���\��#���;*%�b>y�2�3�ç�6m0ߐ�l���_&������f�P0��{�F�d��=`Ss��I�	��d�����`���s��9��N>����#��ky�9�"螂Q:��!wB�� 螂Q9��#wB�� 螂Q;�Q wB�� �~��D�:�5������祪�*΋��%�U�`��Y��p�7&���X��a��Soub��𗷋�0�ɳ�'��m�l�
`M�<y�h���W�Z�z��{Ɣ�#�j$w� A���\�
�;z��{
F��\�
�;z��{
F��a�=@�=�p�0��� 螂Q:��kArAtύ�r�=�j��v�A�>R�����+�fdRӞ.�@�t�F�.U^�Y�B��G���!����֮b`�$y� A�S�4r�D�H=@�=#��0+	�<z��{*F�*f%A�AtO�H]���$H� ���(��'t� ���O_����'��	XOO������/�/���'�N���i�~�`v�!�����b`v$y� A�T�#��6p� �������I=@�=��v��#p� ���Y�*�A�AtO�0�.1��<z���)FYI���4Z�c�v�`��ц��<��8�4C�`��7�$�+���.i�E;������	���3gS2?�u~�陫�v���4�ͫ1]�K�	C�d�d�4�DQ�%�E�,q��0�R�� A��h�U�ˈ��vOZE������S@���TC����*N��g�QS;t��:��~=���~+�o_���[�~�2����*�ۗ��r�V�߾�o5���My��zG�AM���[z�8\sI�T{��GГ����K��{Ʃ�r�"�N��4Q�!Ϙ�[����r9��C 	��� Mg����!���6�1��^BYN�{�1��g&IE�2j�ݐC�CeK~j�u\hH�����Q{� ̇t�_�!y��k+ؕ���A��~�� �6k�tb!/�����HɰS��ln��[���Ϥe�dd�f���K�k�<�(��p�70`�ԋi���g<@.�3|�A�	<<���� Q�d)ݲ��G5[d�9j���M�X[�����o-#����&E�Ā����bĮb�H�Ƀ���b$�bTH�Ƀ���b��f%��AtO��\���$H� ���f��#p� �����cI=@�=�tW>�$� 螊Q��Q#yB$� 螊Q;��DH�Ƀ���b��1�'D� ���u���|�x�9^y��]y_���S�R�T!����&�b�H�Ƀ���b��bdH�Ƀ���bd�8u��?����	�vGh�G��O�������/�G8�������&���jgPazn��@� (��e��_M�� GKznޜ�#��/��*�jSKدL������}3�-�J\qӓm��P�0:'�`� t��i�N�$C���Axd2K88�4Bw́���!A�=y4��t�@Wa�jMrC���a�f�q#�`h���L#o�6g��Hn�h<e�4u#5����ᔴL1iJ{�� �P7�N�ѻk�<�p���Yp�,@��=�9\��,�|�nAZ;��u^� ve�p��:��Z/7�n�a��c���S�7о��M@�聙�����#�8�"��.�t��I1`Va�})9PЮ�:0�Z�I{�yZBL
���?�-W#kx-���q��䙟���U�=|$ 4������S���ct$&��� �C�7K_< ��ۭfw�a`�� A�8��v|��o�2_�!�u)r�z��$tA�|WIa6tAԑ1�������o��j�'mX*�
X`�^��0�A��,$�$ަ��.ʪL^(Z��	�'D� ���e���œ��ui�Q����3z�Ӑ��6��q�ɫ:����E�~��� � �y|�g9�,N=@З��n�d�ƛ���4}�h]F�b��B��A��S1�U�'K�@�ǝ	A��IO��m�n�p.u��d��)R'D� ���)d$���[Y�F����<-�q���M�y��P�.3w'Ȃ�f�w��y�����.V����x�rD��g��Ȉ dv����ש�:1C/^�ӳ���1/@#Q�5�D�&��h��}V��"�7#)^r��ѻg��~3Rŋ9��}N���D���É;�1{�o z����Na/k ���=������3�6Q��e�BѺʜ9��� ѻg�<�ps�Z��ke>�#;&����Ř�)���T�}G܋�Vj:)����������Q�͊mo�(�ꅢuU,eX�/!��ub��M��T;������b�Sx�?���Z�^�(�\��M�M�'Q\�P����̘���[>��~�3���{�'x���kb�z����/E�_�!���5�w�������kb�z��;�r�����h����W��)�����_ۅN.8�mG��	��J���Z�춶�3��̝ ��)뺮���u�2)G&X��0�t�T �,�#����z��?]	�9      �     x��Ms�8��Χ�m/J�/�=ǩ������6�m���o��`� �0�UO���V������KT�(�K_7�_r��7������_���"?��ѿ�c*aR'49?z[�a�A�I�N�[Xf�V7��g	�:a��iB��y���Y��&SfSET;��&��s�}TJ̓2�({TJΖ�J��6'�|"9�@�ЩP���FH��R}���/A	�)7��)7Z�h9;�J���xLɁ���9���uE��7��8JM�6�c��
��k�I@��l�������-�p��M��g)�1=�$�*�G��\%񨒚�$U�#��ET��?+��drn���AP��C�C�L)M%_hI%57�@������r#��C���s���$���{Y�-����[�פη�́����4������Y{���ɋ7�+�v��M���}�T��Zg5y�h��&����g�j���}��ҷ���^?��5��
�/~�G� ���A2�m6�Ўӎ�^V��e�W$o��l��е�;�̷���/���a����w�P�h���&Y���W��Q���m���g;\��_6UY���\<��,/´��/9�� !,�Y��W�����~�Uy�Ms���#o��fY�C���������75Y�EsTN�.���-:L�Z�IFк]��GS���#zD��},�O��6�M��z�O�,&F����=�G�>��J�%�+*��kb zD��=��}_	0�p;�tb��}���ϵ/�l��@�a�Y��E���C�#{��M���l���*o0�0������`bh�0LB]n=y-�-�;���a��h�ߖ�Ꙕ� �r�N�GY�`����*���	y��6��:D��7�C��%�r���V����:��1�Iϭy�A,_¨�6?�w^A��fݢ޾d���:_�|�C��֦u2}A��ٴ�����0e3���� ��/Z���|��!�W�5/`L�55�T*�1P�C·���@~^�'�ޟE�mJ�D�/�ʗM��?�G��?F��ʀ'�	���`q}~ ~ď�?���8�Ł�� ��@���#~�!�Sq /���A����?�G��?B���@]�bq}~ ~ď�?���8З��� ��@���#~�!�Sq`.��8��fG�ف�>�G�?*����@`Iyn |���>
���þ$�XD��#|�����/	����G��#���_.5�K�8��fF����=�G�>��5}!`�B�c�mf��G�1�G�Qb�|tW��]��3�G��#v���Z���(]_ `ZĘ��#vĎ�������O����	K����]�ސu���?���KC6Z����!{�gC9w�j���1��c��ı����B�H�#y$�ɇ.�"�auZ y$��<�����c�"��,J'49��J��j��ow9t�v��jS�R��S)�&�2פ����&Q�!)�0��~���>���M�$4K�L)K�[K���j�kj�!5N��&�cj
��U�qXf"���� g�����hz��Ѩ�PH�#y$��c ?��c=����+�cΌ�'/�~}�棼��c�ys-���L}�Ă����L�7�No�j�����j�n��+J?	��+�^p��=�����mb��{��nu�e�,_|�/1˗��f���U���u/F�7,@cv۾�NL���lx-�����>%��n�f�����Y����l����D�<Q9O<sy"3� �o;����z�_^��DW�Zs[�����c�'�ۇ/���F�zb>k�+�'+~�ʜ��u+{��h�����[7��h�{3��w����ݱ��l�����ӁM;�;�����AL;�;��nx3o�<_����]ٴ+�������w��",�vr�*�Kr�	��W���r�+r�Q98�2���a�O��҅��Qu�	��l)����R����v��)E���0ˠ�����w%�cp�I��`�ݚ��p��2#����������_�.|�      �   �  x��Wm�� ����LJ@P<����_�$=�ٲgcM0R����dб�`�?��a@�
�����(
���xp��{v99��[��L{�P�A,q9��@�g=|�R�zY�$Жh1��t��ނ\pN��f�`"`�
0l�[a{�Dږ��Stq��Hs\ă�ۀPip�`ηF��vQ7h��M��쾫��b=�#�]4�Te���:�}�P��Ԟg��]6"�к��ܭh��	�o1?+���e;�W��+�f�8]�]R;��:4����7�0�*ZmD��0&�Ά�L���vXQ&T����u]��L.�+�'��� ��:p��p���=��?�2�X��7���U>�a����7M�<�W�9��@)&�qy�"�P����� d����� �u�ɓ�#6>B,�
�I���M���)�_�R8l�%�qy2��<9�^�?��F��!ei��xCL':^\�L��b�x��I3r����2���+J48�o\�L�"sG�w
¢��K4}@,�+O���޻<��^$ca0�/D6@��F�#޹<��%�X�G�w���>����#`�T6��7.O�D/�h֦�S�G( ��S��=�R��}�&a{�k[���BXX7J�n\��Ł��>���Y\�}�
��P"nI�Ҿs�?���/��j�      �   �   x�}�=�0��9�O�܀�10���Vc9	UP�z�Z~&F?�O���Z�>`B���zG 2'Ƀ$��֦��D�؄e������ݭ�_;~N��4h���0F��|��<��%�N�c�����Q�E�      �   �  x��V표0�mW�#K�dSD*����3bv�H���"@�{�64(���s
�?����U|Ͳ0	�ݨb�_D�D%�g/k�QC�P���I�6�[ߕ������ښd�Pʗ���v�H�������B`������I#��7! �;� �k�65r_�i� � �P�2�\C� I�},�a�[��<��_2�2M$ �/#����<���z_=::���YP�a��l��7���l���ĭ���7|P����a�p���,p31�3]�e&�yu�؁��9�t��k�����gt��p[�ʀ�V�2�B8*��kYz/Ќ���b/��P)�'q�K�Y4t$&�/$���)�ȲJ^����ܨ"J9e}A>�3��*���i�QE����fo�s'����*�~Q�"�mն'��/ -k�ŭ�}��h��m�0�\�n{ս:���/(P]�K1X'7���I��m(��w���	���G�g�T�Z-�T��1��\��":,���v8�thm�i{Ʈn�G�+���]�{U�k~Ēutq���%����k�7V6�QEA{o0r��i��E90
=RZ�ׄR+^K�QEA�[���*�ZL�oTQ�����te{��	��[�/�T�oTQ0'�����/|ɮf;�A��[���2>�ˍ*~.1Ɵ?�R�     
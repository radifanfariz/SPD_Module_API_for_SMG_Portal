PGDMP     +    %                {            postgres    15.3    15.2 Y    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE        CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3509                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
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
       public         heap    postgres    false    916            �            1259    16449    spd_main    TABLE     ;  CREATE TABLE public.spd_main (
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
    c_spd_hrdadh_name character varying
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
       public          postgres    false    236    237    237                       2606    24772    app_approval app_approval_pkey 
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
       public          app_dev    false    216    3321    220           
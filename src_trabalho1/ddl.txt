create table usuario (
    cod_usuario serial not null,
    email varchar(100),
    senha varchar(200),
    tipo smallint,
	primary key (cod_usuario)
);

create table cidade (
    cod_cidade serial not null,
    nome varchar(30),
    uf char(2),
    primary key (cod_cidade)
);

create table cliente (
    cod_cliente serial not null,
    cod_usuario int not null,
    nome varchar(100),
    cpf varchar(11),
    endereco varchar(200),
    telefone varchar(11),
    primary key (cod_cliente),
    foreign key (cod_usuario)
    	references usuario (cod_usuario)
);

create table hotel (
    cod_interno serial not null,
    cod_cidade int,
    nome varchar(100),
    endereco varchar(200),
    telefone varchar(11),
    primary key (cod_interno),
    foreign key (cod_cidade)
        references cidade (cod_cidade)
);

create table empregado (
    cod_empregado serial not null,
    cod_hotel int,
    nome varchar(100),
    funcao varchar(100),
    primary key (cod_empregado),
    foreign key (cod_hotel)
    	references hotel (cod_interno)
);

create table quarto (
    cod_quarto serial not null,
    cod_hotel int,
    tipo_quarto smallint,
    numero int,
    andar int,
    pernoite real,
    primary key (cod_quarto),
    foreign key (cod_hotel)
        references hotel (cod_interno)
);


create table reserva (
    cod_reserva serial not null,
    cod_quarto int,
    cod_cliente int,
    check_in date,
    check_out date,
    dia_reserva date,
    hora_reserva time,
    cama_extra bool,
    valor_total real,
    valor_entrada real not null,
    status smallint,
    primary key (cod_reserva),
    foreign key (cod_quarto)
        references quarto (cod_quarto),
    foreign key (cod_cliente)
        references cliente (cod_cliente)
);

create table estadia (
    cod_estadia serial,
    cod_quarto integer not null,
    cod_cliente integer not null,
    check_in date not null,
    check_out date not null,
    valor_total real,
    primary key (cod_estadia),
    foreign key (cod_quarto)
        references quarto (cod_quarto),
    foreign key (cod_cliente)
        references cliente (cod_cliente)
);

create table servico (
    cod_servico serial not null,
    cod_estadia int,
    cod_empregado int,
    valor real,
    dia date,
    hora time,
    descricao varchar(200),
    primary key (cod_servico),
    foreign key (cod_estadia)
        references estadia (cod_estadia),
    foreign key (cod_empregado)
        references empregado (cod_empregado)
);

------ POPULANDO CIDADES
insert into cidade (nome, uf)
    values ('Joinville', 'SC');
insert into cidade (nome, uf)
    values ('Florianópolis', 'SC');
insert into cidade (nome, uf)
    values ('Jaraguá do Sul', 'SC');
insert into cidade (nome, uf)
    values ('Chapecó', 'SC');
insert into cidade (nome, uf)
    values ('Itapema', 'SC');


------ POPULANDO HOTÉIS
insert into hotel (cod_cidade, nome, endereco, telefone)
	values (1, 'Fritz', 'Rua Marechal, 512', '4734343434');
insert into hotel (cod_cidade, nome, endereco, telefone)
	values (2, 'Beiramar', 'Rua XV de dezembro, 413', '4734343434');
insert into hotel (cod_cidade, nome, endereco, telefone)
	values (3, 'Garden', 'Rua Mercês, 121', '4734343434');
insert into hotel (cod_cidade, nome, endereco, telefone)
	values (4, 'Solar', 'Rua Presidente, 98', '4734343434');
insert into hotel (cod_cidade, nome, endereco, telefone)
	values (5, 'Prime', 'Rua João Colin, 322', '4734343434');


------ POPULANDO TIPOS DE QUARTOS
insert into tipo_quarto (tipo, capacidade)
    values ('single', 1);
insert into tipo_quarto (tipo, capacidade)
    values ('duplo', 2);
insert into tipo_quarto (tipo, capacidade)
    values ('casal', 2);
insert into tipo_quarto (tipo, capacidade)
    values ('suite', 1);


------ POPULANDO QUARTOS

------ QUARTOS DO HOTEL 1
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (1, 1, 11, 1, 150.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (1, 2, 22, 2, 300.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (1, 3, 33, 2, 200.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (1, 4, 44, 1, 180.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (1, 4, 55, 2, 180.00);

------ QUARTOS DO HOTEL 2
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (2, 1, 11, 1, 160.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (2, 2, 22, 2, 310.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (2, 3, 33, 2, 210.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (2, 4, 44, 1, 190.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (2, 4, 55, 2, 190.00);

------ QUARTOS DO HOTEL 3
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (3, 1, 11, 1, 155.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (3, 2, 22, 2, 305.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (3, 3, 33, 2, 205.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (3, 4, 44, 1, 175.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (3, 4, 55, 2, 175.00);

------ QUARTOS DO HOTEL 4
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (4, 1, 11, 1, 166.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (4, 2, 22, 2, 312.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (4, 3, 33, 2, 199.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (4, 4, 44, 1, 179.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (4, 4, 55, 2, 179.00);

------ QUARTOS DO HOTEL 5
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (5, 1, 11, 1, 160.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (5, 2, 22, 2, 310.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (5, 3, 33, 2, 210.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (5, 4, 44, 1, 190.00);
insert into quarto (cod_hotel, cod_tipo, numero, andar, pernoite)
	values (5, 4, 55, 2, 190.00);


----- POPULANDO EMPREGADOS
----- EMPREGADOS HOTEL 1
insert into empregado (cod_hotel, nome, funcao)
    values (1, 'Maria', 'Limpeza');
insert into empregado (cod_hotel, nome, funcao)
    values (1, 'Joao', 'Cozinheiro');
insert into empregado (cod_hotel, nome, funcao)
    values (1, 'Bruna', 'Lavanderia');
insert into empregado (cod_hotel, nome, funcao)
    values (1, 'Carlos', 'Manobragem');
insert into empregado (cod_hotel, nome, funcao)
    values (1, 'Alberto', 'Barman');

----- EMPREGADOS HOTEL 2
insert into empregado (cod_hotel, nome, funcao)
    values (2, 'Glória', 'Limpeza');
insert into empregado (cod_hotel, nome, funcao)
    values (2, 'José', 'Cozinheiro');
insert into empregado (cod_hotel, nome, funcao)
    values (2, 'Bruno', 'Lavanderia');
insert into empregado (cod_hotel, nome, funcao)
    values (2, 'Carla', 'Manobragem');
insert into empregado (cod_hotel, nome, funcao)
    values (2, 'André', 'Barman');

----- EMPREGADOS HOTEL 3
insert into empregado (cod_hotel, nome, funcao)
    values (3, 'Helena', 'Limpeza');
insert into empregado (cod_hotel, nome, funcao)
    values (3, 'Davi', 'Cozinheiro');
insert into empregado (cod_hotel, nome, funcao)
    values (3, 'Luiza', 'Lavanderia');
insert into empregado (cod_hotel, nome, funcao)
    values (3, 'Lucas', 'Manobragem');
insert into empregado (cod_hotel, nome, funcao)
    values (3, 'Eloá', 'Barman');

----- EMPREGADOS HOTEL 4
insert into empregado (cod_hotel, nome, funcao)
    values (4, 'Júlia', 'Limpeza');
insert into empregado (cod_hotel, nome, funcao)
    values (4, 'Miguel', 'Cozinheiro');
insert into empregado (cod_hotel, nome, funcao)
    values (4, 'Sophia', 'Lavanderia');
insert into empregado (cod_hotel, nome, funcao)
    values (4, 'Heitor', 'Manobragem');
insert into empregado (cod_hotel, nome, funcao)
    values (4, 'Rafael', 'Barman');

----- EMPREGADOS HOTEL 5
insert into empregado (cod_hotel, nome, funcao)
    values (5, 'Valentina', 'Limpeza');
insert into empregado (cod_hotel, nome, funcao)
    values (5, 'Bernardo', 'Cozinheiro');
insert into empregado (cod_hotel, nome, funcao)
    values (5, 'Henrique', 'Lavanderia');
insert into empregado (cod_hotel, nome, funcao)
    values (5, 'Joaquim', 'Manobragem');
insert into empregado (cod_hotel, nome, funcao)
    values (5, 'Samuel', 'Barman');



-----------------------------------------------------------------------------------

create view hotelEstadia as 
	select hotel.cod_interno, hotel.cod_cidade, estadia.check_in, estadia.check_out from hotel, estadia, quarto
		where estadia.cod_quarto = quarto.cod_quarto and
			  hotel.cod_interno = quarto.cod_hotel;


-----------------------------------------------------------------------

create or replace function inserirCliente(
	nnome varchar(100),
	ncpf varchar(11),
	nendereco varchar(200),
	ntelefone varchar(11),
	nemail varchar(100),
	nsenha varchar(200)
) returns void as
$$
declare cod int;

begin

	insert into usuario (email, senha) values (nemail, nsenha) returning cod_usuario into cod;
	insert into cliente (cod_usuario, nome, cpf, endereco, telefone) values (cod, nnome, ncpf, nendereco, ntelefone); 

end;
$$
language plpgsql;

------------------------------------------------------------

create function verificaQuartoHotel() returns trigger as
$$
begin

	if ( select count(*) from quarto where quarto.cod_hotel = new.cod_hotel and quarto.cod_quarto = new.cod_quarto ) = 0 then
		raise exception 'Este quarto não é vinculado a este hotel!';
	end if;

    return new;
	
end;
$$
language plpgsql;

create trigger verificaQuartoHotel before insert or update on reserva
	for each row execute procedure verificaQuartoHotel();
	
-------------------------------------------------------------

create or replace function verificaDatas() returns trigger as
$$
begin

	if (
		select count(*) from hotelEstadia
			where new.cod_interno = hotelEstadia.cod_interno
			and (new.check_in between hotelEstadia.check_in and hotelEstadia.check_out
			or new.check_out between hotelEstadia.check_in and hotelEstadia.check_out)	
	) > 0 then
		raise exception 'Datas indisponíveis para reserva';
	end if;
	
	return new;
end;
$$
language plpgsql;

create trigger verificaDatas before insert or update on reserva
	for each row execute procedure verificaQuartoHotel();

---------------------------------------------------------------

create or replace function calcularValorTotalReserva() returns trigger as
$$
declare
	dias int;
	valor_pernoite real;
begin
	dias := (select extract(day from new.check_out::timestamp - new.check_in::timestamp));
	valor_pernoite := (select pernoite from quarto where quarto.cod_quarto = new.cod_quarto);
	new.valor_total := dias * valor_pernoite;
	return new;
end;
$$
language plpgsql;

create trigger calcularValorTotalReserva before insert or update on reserva
	for each row execute procedure calcularValorTotalReserva();


--------------------------------------------------------------------
create or replace function checkCamaExtra() returns trigger as
$$
declare
	tipo_quarto int;
begin
	tipo_quarto := (select tipo_quarto from quarto
						join reserva on new.cod_quarto = quarto.cod_quarto);
						
	if (tipo_quarto = 0 and new.cama_extra) then
		raise exception 'Cama extra não é disponibilizada nesse tipo de quarto!';
	end if;
	return new;
	
end;
$$
language plpgsql;

create trigger checkCamaExtra before insert or update on reserva
	for each row execute procedure checkCamaExtra();

--------------------------------------------------------------------

create or replace function atualizarValorServico(ncod_estadia int) returns void as
$$
begin
	update estadia
		set valor_total = valor_total + 50
		where cod_estadia = ncod_estadia;
	
	
end;
$$
language plpgsql;
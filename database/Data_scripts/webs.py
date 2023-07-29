text = open('DaoBase\database\Data_csv\webs.csv','r')
end = open('DaoBase\database\webs.sql','w')
count = 0
for line in text:
    count += 1
    li = line.split(',')
    end.write(f'''
INSERT INTO readyplayerdao.Comunity (comunity_id,webPage,twitter,Discord)
VALUES ({count},"{li[0]}","{li[1]}","{li[2]}");
              ''')
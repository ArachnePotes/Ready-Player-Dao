text = open('DaoBase\database\Data_csv\countries.txt','r')
end = open('DaoBase\database\countries.sql','w')
count = 0
for line in text:
    count += 1
    end.write(f'''
INSERT INTO readyplayerdao.countries (Country_id,Country_name)
VALUES ({count},"{line}");
              ''')
# Link from Sentry to Insight

### create release package

```
$ rm package.zip
$ zip -r package.zip chrome/
```

### 主保険
```
select distinct hbtnum, '<option value="' || hbtnum || '">[' || hbtnum || '] ' || seidoname || '(' || tanseidoname || ')</option>' from tbl_hknnum where tekstymd <= '2020-02-01' and tekedymd >= '2020-02-01' and hknkohsbtkbn = '1' order by hbtnum;
```

### 公費その他
```
select distinct hbtnum, '<option value="' || hbtnum || '">[' || hbtnum || '] ' || seidoname || '(' || tanseidoname || ')</option>' from tbl_hknnum where tekstymd <= '2020-02-01' and tekedymd >= '2020-02-01' and hknkohsbtkbn != '1' order by hbtnum;
```
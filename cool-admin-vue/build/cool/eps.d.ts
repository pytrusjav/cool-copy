declare namespace Eps {
	interface DictInfoEntity {
		/**
		 * 类型ID
		 */
		typeId?: number;

		/**
		 * 父ID
		 */
		parentId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 值
		 */
		value?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 标识
		 */
		key?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * 类别名称
		 */
		name?: string;

		/**
		 * 父分类ID
		 */
		parentId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * 地址
		 */
		url?: string;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * 分类ID
		 */
		classifyId?: number;

		/**
		 * 文件id
		 */
		fileId?: string;

		/**
		 * 文件名
		 */
		name?: string;

		/**
		 * 文件大小
		 */
		size?: number;

		/**
		 * 文档版本
		 */
		version?: number;

		/**
		 * 文件位置
		 */
		filePath?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * 父菜单ID
		 */
		parentId?: number;

		/**
		 * 菜单名称
		 */
		name?: string;

		/**
		 * 权限
		 */
		perms?: string;

		/**
		 * 类型 0：目录 1：菜单 2：按钮
		 */
		type?: number;

		/**
		 * 图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 菜单地址
		 */
		router?: string;

		/**
		 * 视图地址
		 */
		viewPath?: string;

		/**
		 * 路由缓存
		 */
		keepAlive?: boolean;

		/**
		 * 是否显示
		 */
		isShow?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 角色标签
		 */
		label?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 数据权限是否关联上下级
		 */
		relevance?: number;

		/**
		 * 菜单权限
		 */
		menuIdList?: string;

		/**
		 * 部门权限
		 */
		departmentIdList?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysDepartmentEntity {
		/**
		 * 部门名称
		 */
		name?: string;

		/**
		 * 上级部门ID
		 */
		parentId?: number;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * 部门ID
		 */
		departmentId?: number;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 用户名
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 密码版本
		 */
		passwordV?: number;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 头像
		 */
		headImg?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 邮箱
		 */
		email?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态 0:禁用 1：启用
		 */
		status?: number;

		/**
		 * socketId
		 */
		socketId?: string;

		/**
		 * 租户id
		 */
		tenantId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 行为
		 */
		action?: string;

		/**
		 * IP
		 */
		ip?: string;

		/**
		 * 参数
		 */
		params?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * 键
		 */
		keyName?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 数据
		 */
		data?: string;

		/**
		 * 数据类型 0:字符串 1:数组 2:键值对
		 */
		dataType?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 任务ID
		 */
		jobId?: string;

		/**
		 * 最大执行次数 不传为无限次
		 */
		repeatCount?: number;

		/**
		 * 每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效
		 */
		every?: number;

		/**
		 * 状态 0:停止 1：运行
		 */
		status?: number;

		/**
		 * 服务实例名称
		 */
		service?: string;

		/**
		 * 状态 0:cron 1：时间间隔
		 */
		taskType?: number;

		/**
		 * 状态 0:系统 1：用户
		 */
		type?: number;

		/**
		 * 任务数据
		 */
		data?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * cron
		 */
		cron?: string;

		/**
		 * 下一次执行时间
		 */
		nextRunTime?: Date;

		/**
		 * 开始时间
		 */
		startDate?: Date;

		/**
		 * 结束时间
		 */
		endDate?: Date;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 登录唯一ID
		 */
		unionid?: string;

		/**
		 * 头像
		 */
		avatarUrl?: string;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 性别 0-未知 1-男 2-女
		 */
		gender?: number;

		/**
		 * 状态 0-禁用 1-正常 2-已注销
		 */
		status?: number;

		/**
		 * 登录方式 0-小程序 1-公众号 2-H5
		 */
		loginType?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * 表信息
		 */
		entityInfo?: string;

		/**
		 * 操作人
		 */
		userId?: number;

		/**
		 * 被删除的数据
		 */
		data?: string;

		/**
		 * 请求的接口
		 */
		url?: string;

		/**
		 * 请求参数
		 */
		params?: string;

		/**
		 * 删除数据条数
		 */
		count?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 简介
		 */
		description?: string;

		/**
		 * 实例对象
		 */
		key?: string;

		/**
		 * Hook
		 */
		hook?: string;

		/**
		 * 描述
		 */
		readme?: string;

		/**
		 * 版本
		 */
		version?: string;

		/**
		 * Logo(base64)
		 */
		logo?: string;

		/**
		 * 作者
		 */
		author?: string;

		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;

		/**
		 * 插件的plugin.json
		 */
		pluginJson?: string;

		/**
		 * 配置
		 */
		config?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	interface PagePagination {
		size: number;
		page: number;
		total: number;
		[key: string]: any;
	}

	interface PageResponse<T> {
		pagination: PagePagination;
		list: T[];
		[key: string]: any;
	}

	interface DictInfoPageResponse {
		pagination: PagePagination;
		list: DictInfoEntity[];
	}

	interface DictTypePageResponse {
		pagination: PagePagination;
		list: DictTypeEntity[];
	}

	interface SpaceTypePageResponse {
		pagination: PagePagination;
		list: SpaceTypeEntity[];
	}

	interface SpaceInfoPageResponse {
		pagination: PagePagination;
		list: SpaceInfoEntity[];
	}

	interface BaseSysMenuPageResponse {
		pagination: PagePagination;
		list: BaseSysMenuEntity[];
	}

	interface BaseSysRolePageResponse {
		pagination: PagePagination;
		list: BaseSysRoleEntity[];
	}

	interface BaseSysUserPageResponse {
		pagination: PagePagination;
		list: BaseSysUserEntity[];
	}

	interface BaseSysLogPageResponse {
		pagination: PagePagination;
		list: BaseSysLogEntity[];
	}

	interface BaseSysParamPageResponse {
		pagination: PagePagination;
		list: BaseSysParamEntity[];
	}

	interface TaskInfoPageResponse {
		pagination: PagePagination;
		list: TaskInfoEntity[];
	}

	interface UserInfoPageResponse {
		pagination: PagePagination;
		list: UserInfoEntity[];
	}

	interface RecycleDataPageResponse {
		pagination: PagePagination;
		list: RecycleDataEntity[];
	}

	interface PluginInfoPageResponse {
		pagination: PagePagination;
		list: PluginInfoEntity[];
	}

	interface DictInfo {
		/**
		 * 查询
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<DictInfoPageResponse>;

		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 获得字典数据
		 */
		types(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			update: string;
			add: string;
			info: string;
			page: string;
			data: string;
			delete: string;
			types: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			update: boolean;
			add: boolean;
			info: boolean;
			page: boolean;
			data: boolean;
			delete: boolean;
			types: boolean;
		};

		request: Request;
	}

	interface DictType {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<DictTypePageResponse>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			update: string;
			list: string;
			delete: string;
			info: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			list: boolean;
			delete: boolean;
			info: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface SpaceType {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<SpaceTypePageResponse>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			info: string;
			page: string;
			update: string;
			list: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			info: boolean;
			page: boolean;
			update: boolean;
			list: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SpaceInfo {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<SpaceInfoPageResponse>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			update: string;
			list: string;
			info: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			list: boolean;
			info: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface BaseOpen {
		/**
		 * 登录
		 */
		login(data?: any): Promise<any>;

		/**
		 * 验证码
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * 刷新token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 验证码类型
		 */
		captchaMode(data?: any): Promise<any>;

		/**
		 * check
		 */
		check(data?: any): Promise<any>;

		/**
		 * gen
		 */
		gen(data?: any): Promise<any>;

		/**
		 * 获得网页内容的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			login: string;
			captcha: string;
			refreshToken: string;
			eps: string;
			captchaMode: string;
			check: string;
			gen: string;
			html: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			login: boolean;
			captcha: boolean;
			refreshToken: boolean;
			eps: boolean;
			captchaMode: boolean;
			check: boolean;
			gen: boolean;
			html: boolean;
		};

		request: Request;
	}

	interface BaseSysMenu {
		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 导出
		 */
		export(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<BaseSysMenuPageResponse>;

		/**
		 * 创建代码
		 */
		create(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 导入
		 */
		import(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			add: string;
			export: string;
			update: string;
			info: string;
			page: string;
			create: string;
			delete: string;
			import: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			add: boolean;
			export: boolean;
			update: boolean;
			info: boolean;
			page: boolean;
			create: boolean;
			delete: boolean;
			import: boolean;
		};

		request: Request;
	}

	interface BaseSysRole {
		/**
		 * 信息
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<BaseSysRolePageResponse>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			page: string;
			delete: string;
			add: string;
			list: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			page: boolean;
			delete: boolean;
			add: boolean;
			list: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface BaseSysDepartment {
		/**
		 * 排序
		 */
		order(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { order: string; list: string; delete: string; add: string; update: string };

		/**
		 * 权限状态
		 */
		_permission: {
			order: boolean;
			list: boolean;
			delete: boolean;
			add: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface BaseSysUser {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<BaseSysUserPageResponse>;

		/**
		 * 移动部门
		 */
		move(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			add: string;
			info: string;
			update: string;
			page: string;
			move: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			info: boolean;
			update: boolean;
			page: boolean;
			move: boolean;
		};

		request: Request;
	}

	interface BaseSysLog {
		/**
		 * 获得日志报错时间
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 设置日志保存时间
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * 清理日志
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<BaseSysLogPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { getKeep: string; setKeep: string; clear: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { getKeep: boolean; setKeep: boolean; clear: boolean; page: boolean };

		request: Request;
	}

	interface BaseSysParam {
		/**
		 * 信息
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<BaseSysParamPageResponse>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 根据键返回网页的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			page: string;
			delete: string;
			add: string;
			html: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			page: boolean;
			delete: boolean;
			add: boolean;
			html: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface BaseComm {
		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 退出
		 */
		logout(data?: any): Promise<any>;

		/**
		 * 修改个人信息
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * 个人信息
		 */
		person(data?: any): Promise<any>;

		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 编程
		 */
		program(data?: any): Promise<any>;

		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 权限与菜单
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			eps: string;
			logout: string;
			personUpdate: string;
			person: string;
			uploadMode: string;
			program: string;
			upload: string;
			permmenu: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			eps: boolean;
			logout: boolean;
			personUpdate: boolean;
			person: boolean;
			uploadMode: boolean;
			program: boolean;
			upload: boolean;
			permmenu: boolean;
		};

		request: Request;
	}

	interface BaseCoding {
		/**
		 * 创建代码
		 */
		createCode(data?: any): Promise<any>;

		/**
		 * 获取模块目录结构
		 */
		getModuleTree(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { createCode: string; getModuleTree: string };

		/**
		 * 权限状态
		 */
		_permission: { createCode: boolean; getModuleTree: boolean };

		request: Request;
	}

	interface TaskInfo {
		/**
		 * 开始任务
		 */
		start(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 执行一次
		 */
		once(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<TaskInfoPageResponse>;

		/**
		 * 停止任务
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 任务日志
		 */
		log(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			start: string;
			update: string;
			once: string;
			info: string;
			page: string;
			stop: string;
			add: string;
			log: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			start: boolean;
			update: boolean;
			once: boolean;
			info: boolean;
			page: boolean;
			stop: boolean;
			add: boolean;
			log: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface UserInfo {
		/**
		 * 信息
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<UserInfoPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			delete: string;
			page: string;
			add: string;
			update: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			delete: boolean;
			page: boolean;
			add: boolean;
			update: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface RecycleData {
		/**
		 * 查询
		 */
		list(data?: any): Promise<RecycleDataEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<RecycleDataPageResponse>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 恢复数据
		 */
		restore(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			add: string;
			update: string;
			info: string;
			page: string;
			delete: string;
			restore: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			add: boolean;
			update: boolean;
			info: boolean;
			page: boolean;
			delete: boolean;
			restore: boolean;
		};

		request: Request;
	}

	interface PluginInfo {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<PluginInfoPageResponse>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * 安装插件
		 */
		install(data?: any): Promise<any>;

		/**
		 * 卸载插件
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			update: string;
			page: string;
			info: string;
			install: string;
			delete: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			page: boolean;
			info: boolean;
			install: boolean;
			delete: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface RequestOptions {
		url: string;
		method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
		data?: any;
		params?: any;
		headers?: any;
		timeout?: number;
		[key: string]: any;
	}

	type Request = (options: RequestOptions) => Promise<any>;

	type DictKey = string;

	type Service = {
		request: Request;

		dict: { info: DictInfo; type: DictType };
		space: { type: SpaceType; info: SpaceInfo };
		base: {
			open: BaseOpen;
			sys: {
				menu: BaseSysMenu;
				role: BaseSysRole;
				department: BaseSysDepartment;
				user: BaseSysUser;
				log: BaseSysLog;
				param: BaseSysParam;
			};
			comm: BaseComm;
			coding: BaseCoding;
		};
		task: { info: TaskInfo };
		user: { info: UserInfo };
		recycle: { data: RecycleData };
		plugin: { info: PluginInfo };
	};
}
